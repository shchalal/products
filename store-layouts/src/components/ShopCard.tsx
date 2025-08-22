import type { Product } from '../data/products'

interface ShopCardProps {
  product: Product;
}

export default function ShopCard({ product }: ShopCardProps) {
  const { name, price, color, img } = product;
  return (
    <div className="shop-card">
      <div className="title">{name}</div>
      <div className="color">{color}</div>
      <img className="image" src={img} alt={`${name} ${color}`} />
      <div className="card-footer">
        <div className="price">${price}</div>
        <button className="btn" type="button">ADD TO CART</button>
      </div>
    </div>
  );
}
