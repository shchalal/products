import ShopItem from './ShopItem'
import type { Product } from '../data/products'

interface ListViewProps {
  items: Product[];
}

export default function ListView({ items }: ListViewProps) {
  return (
    <div className="list-view">
      {items.map((p) => (
        <ShopItem key={`${p.name}-${p.color}`} product={p} />
      ))}
    </div>
  );
}
