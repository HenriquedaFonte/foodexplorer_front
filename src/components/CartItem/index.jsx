
import { Container } from './styles';
export function CartItem({ items, onRemoveProduct }) {
  
  return (
    <Container>
      <img src={items.avatar} />
      <div className="contentItem">
        <h3>
          {items.amount} x {items.name}
          <span>{items.price}$</span>
        </h3>
        <button onClick={() => {onRemoveProduct(items.id)}}>Delete</button>
      </div>
    </Container>
  );
}