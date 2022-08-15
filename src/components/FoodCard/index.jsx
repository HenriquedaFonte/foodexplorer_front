import { Container } from './styles';
import { BiHeart, BiPlus, BiMinus } from 'react-icons/bi';
import { Button } from '../Button';

export function FoodCard({ img: Img, name, description, price, ...rest }) {
  return (
    <Container>
      <BiHeart id="favorite" size={32} color="white"/>
      <img src={Img}/>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>{price}</h2>
      <footer>
        <div className="stepper">
          <BiMinus size={25} color="white"/>
          <strong>01</strong>
          <BiPlus size={25} color="white"/>
        </div>
        <Button id="addFood" title="Add"/>
      </footer>
    </Container >
  );
};