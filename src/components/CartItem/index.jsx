
import { Container } from './styles';
export function CartItem({ items }) {
  
  return (
    <Container>
      <img src={items.img} />
      <div className="contentItem">
        <h3>
          {items.qtd} x {items.name}
          <span>{items.price}$</span>
        </h3>
        <button onClick={() => {}}>Delete</button>
      </div>
    </Container>
  );
}