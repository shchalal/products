import ShopCard from './ShopCard'
import type { Product } from '../data/products'

interface CardsViewProps {
  cards: Product[];
}

export default function CardsView({ cards }: CardsViewProps) {
  return (
    <div className="cards-view">
      {cards.map((p) => (
        <ShopCard key={`${p.name}-${p.color}`} product={p} />
      ))}
    </div>
  );
}
