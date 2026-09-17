import MarketCard from './MarketCard';

// Static strings so Tailwind's JIT picks them up.
const SPAN_CLASS = {
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  6: 'lg:col-span-6',
};

// Column spans on a 6-column grid: lead row 4+2, middle rows of 2+2+2,
// tail pair 3+3. Leftover middle cards become mirrored 2+4 / 4+2 rows so
// every row sums to 6 for any count.
export function mosaicSpans(count) {
  if (count <= 0) return [];
  if (count === 1) return [6];
  if (count === 2) return [3, 3];
  if (count === 3) return [6, 3, 3];

  const middle = count - 4;
  const triples = Math.floor(middle / 3);
  const remainder = middle % 3;
  const rows = [];

  if (remainder === 1 && triples === 0) {
    rows.push(6);
  } else {
    const fullTriples = remainder === 1 ? triples - 1 : triples;
    for (let t = 0; t < fullTriples; t++) rows.push(2, 2, 2);
    if (remainder === 2) rows.push(2, 4);
    if (remainder === 1) rows.push(2, 4, 4, 2);
  }

  return [4, 2, ...rows, 3, 3];
}

export default function MarketMosaic({ markets }) {
  const spans = mosaicSpans(markets.length);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
      {markets.map((m, i) => (
        <MarketCard key={m.id} market={m} index={i} className={SPAN_CLASS[spans[i]]} />
      ))}
    </div>
  );
}
