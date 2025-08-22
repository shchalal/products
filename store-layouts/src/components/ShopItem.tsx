import type { Product } from '../data/products'

interface ShopItemProps {
  product: Product;
}

export default function ShopItem({ product }: ShopItemProps) {
  const { name, price, color, img } = product;
  return (
    <div className="shop-item">
      <img className="image" src={img} alt={`${name} ${color}`} />
      <div className="title">{name}</div>
      <div className="color">{color}</div>
      <div className="price">${price}</div>
      <button className="btn" type="button">ADD TO CART</button>
    </div>
  );
}
