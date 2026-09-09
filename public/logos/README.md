# Client logos

The Client Experience section is built to display real client logos, but it
ships with typographic wordmarks until each company has given written
permission for its mark to be used.

## Enabling a real logo

1. Obtain written permission from the client (marketing / brand contact).
2. Save the supplied artwork here as `<slug>.svg` (preferred) or `<slug>.png`,
   using the slug from `CLIENTS` in `lib/data.js` — e.g. `weg.svg`,
   `john-king-chain.svg`.
3. Set `logo: '/logos/<slug>.svg'` on that company in `lib/data.js`.

No other change is needed. `components/ClientLogo.jsx` renders the artwork in
place of the wordmark automatically.

## Artwork guidance

- Supply the mono or single-colour version where the client offers one; the
  grid renders logos desaturated and lifts them to full colour on hover.
- Trim surrounding whitespace so optical sizing stays consistent across the
  grid. Logos are contained in a fixed-height box, never cropped or stretched.
- SVG preferred. If only raster is available, supply at least 2x the rendered
  height (>= 160px tall).
- Keep the client's own file: do not recolour, redraw or otherwise modify a
  third-party mark.
