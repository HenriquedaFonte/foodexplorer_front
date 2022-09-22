
import { Container } from './styles';
export function CartItem({ items }) {
  
  return (
    <Container>
      <img src={items.product.avatar} />
      <div className="contentItem">
        <h3>
          {items.product.amount} x {items.product.name}
          <span>{items.product.price}$</span>
        </h3>
        <button onClick={() => {}}>Delete</button>
      </div>
    </Container>
  );
}