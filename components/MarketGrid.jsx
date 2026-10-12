import MarketCard from './MarketCard';

// Uniform grid of market cards: every card takes exactly one column, so every
// card image box has the same width, height and aspect ratio at a given
// screen width (client request: no larger/wider sector images).
// 1 column on phones, 2 on tablets/small laptops, 4 from 1280px up
// (eight markets = two even rows of four).
export default function MarketGrid({ markets }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {markets.map((m, i) => (
        <MarketCard key={m.id} market={m} index={i} />
      ))}
    </div>
  );
}
