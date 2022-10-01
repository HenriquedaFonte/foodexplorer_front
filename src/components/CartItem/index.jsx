
import { Container } from './styles';
export function CartItem({ items, onRemoveProduct }) {
  
  return (
    <Container>
      <img src={items.product.avatar} />
      <div className="contentItem">
        <h3>
          {items.product.amount} x {items.product.name}
          <span>{items.product.price}$</span>
        </h3>
        <button onClick={onRemoveProduct}>Delete</button>
      </div>
    </Container>
  );
}