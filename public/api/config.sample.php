<?php
/**
 * Consulo Global contact form — Resend configuration TEMPLATE.
 *
 * Copy this file to config.php (same folder) and fill in the real values.
 * config.php is gitignored and must NEVER be committed or shared — it holds
 * a live Resend API key.
 *
 * Where to get these:
 * - $resendApiKey: https://resend.com/api-keys (create a key scoped to
 *   "Sending access" only — it does not need domain/account admin rights).
 * - $resendFrom: must be an address on a domain you've verified in Resend
 *   (Resend → Domains → Add Domain → add the DNS records at your registrar).
 *   Until a domain is verified, Resend only allows sending to your own
 *   account email, so verify the Consulo Global domain before going live.
 * - $resendTo: the mailbox that should receive enquiries (e.g. the free
 *   Hostinger mailbox once the hosting plan is purchased).
 * - $allowedOrigin: the live site's exact origin, e.g.
 *   'https://consuloglobal.com' — locks the API down to same-site requests
 *   only. Leave null while testing locally to skip the CORS header.
 */

$resendApiKey = 'PASTE_RESEND_API_KEY_HERE';
$resendFrom = 'Consulo Global Website <enquiries@consuloglobal.com>';
$resendTo = 'hello@consuloglobal.com';
$allowedOrigin = null; // e.g. 'https://consuloglobal.com'
