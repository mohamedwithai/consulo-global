<?php
/**
 * Consulo Global contact form → Resend.
 *
 * Unlike Web3Forms (Zinat Al Ruh's approach), Resend's API key is a SECRET:
 * it must never reach the browser, so this PHP script is the one server-side
 * piece in an otherwise fully static site. It receives the form POST,
 * validates it, and calls Resend's HTTP API from the server using a key that
 * lives in config.php (gitignored, never shipped to the client, never in
 * client-side JS).
 *
 * Deploy: upload this whole /api folder next to the exported site (e.g.
 * public_html/api/send.php) and create api/config.php from
 * config.sample.php with the real Resend API key + destination email.
 */

header('Content-Type: application/json');

// --- CORS / method guard -----------------------------------------------
// Same-origin form only; no other site should be able to trigger sends.
$allowedOrigin = null; // set in config.php, e.g. 'https://consuloglobal.com'
require __DIR__ . '/config.php';

if (!empty($allowedOrigin)) {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
}
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

// --- Read input -----------------------------------------------------------
// Accept both JSON and normal form-encoded POSTs.
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') !== false) {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true) ?: [];
} else {
    $data = $_POST;
}

// Honeypot: a hidden field real users never fill in. Bots that fill every
// field get a fake success with nothing actually sent.
if (!empty(trim((string) ($data['botcheck'] ?? '')))) {
    respond(200, true, 'Thank you.');
}

// --- Basic validation -------------------------------------------------
$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$route = trim((string) ($data['route'] ?? 'talk')); // hiring | career | talk

if ($name === '' || $email === '') {
    respond(422, false, 'Name and email are required.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, false, 'Please provide a valid email address.');
}

// Simple rate limiting isn't practical on shared hosting without a DB;
// Resend's own account-level rate limits are the backstop here.

// --- Build a readable plain-text + HTML body from whatever fields came in --
$skip = ['botcheck', 'route', 'name', 'email'];
$rows = [];
foreach ($data as $key => $value) {
    if (in_array($key, $skip, true)) {
        continue;
    }
    $value = trim((string) $value);
    if ($value === '') {
        $value = 'Not provided';
    }
    $label = ucwords(str_replace(['_', '-'], ' ', $key));
    $rows[] = [$label, $value];
}

$routeLabels = [
    'hiring' => "I'm Hiring",
    'career' => "I'm Considering My Career",
    'talk' => 'I Just Want to Talk',
];
$routeLabel = $routeLabels[$route] ?? $route;

$textLines = ["New Consulo Global website enquiry", "Route: {$routeLabel}", "Name: {$name}", "Email: {$email}", ''];
$htmlRows = "<tr><td style=\"padding:4px 8px;font-weight:600;\">Route</td><td style=\"padding:4px 8px;\">" . htmlspecialchars($routeLabel) . "</td></tr>";
$htmlRows .= "<tr><td style=\"padding:4px 8px;font-weight:600;\">Name</td><td style=\"padding:4px 8px;\">" . htmlspecialchars($name) . "</td></tr>";
$htmlRows .= "<tr><td style=\"padding:4px 8px;font-weight:600;\">Email</td><td style=\"padding:4px 8px;\">" . htmlspecialchars($email) . "</td></tr>";

foreach ($rows as [$label, $value]) {
    $textLines[] = "{$label}: {$value}";
    $htmlRows .= "<tr><td style=\"padding:4px 8px;font-weight:600;\">" . htmlspecialchars($label) . "</td><td style=\"padding:4px 8px;white-space:pre-wrap;\">" . nl2br(htmlspecialchars($value)) . "</td></tr>";
}

$text = implode("\n", $textLines);
$html = "<table style=\"border-collapse:collapse;font-family:sans-serif;font-size:14px;\">{$htmlRows}</table>";

// --- Send via Resend --------------------------------------------------
$payload = [
    'from' => $resendFrom,           // must be a verified domain/sender in Resend
    'to' => [$resendTo],
    'reply_to' => $email,             // client can hit "Reply" straight to the enquirer
    'subject' => "New website enquiry ({$routeLabel}) from {$name}",
    'text' => $text,
    'html' => $html,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $resendApiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_TIMEOUT => 15,
]);
$responseBody = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    error_log('Resend request failed: ' . $curlError);
    respond(502, false, 'Unable to send your enquiry right now. Please try again shortly.');
}

if ($httpCode < 200 || $httpCode >= 300) {
    error_log('Resend API error (' . $httpCode . '): ' . $responseBody);
    respond(502, false, 'Unable to send your enquiry right now. Please try again shortly.');
}

respond(200, true, 'Thank you — your enquiry has been received.');
