import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPlus, BiMinus } from 'react-icons/bi';

import { Container, Heart } from './styles';
import { Button } from '../Button';


export function FoodCard({ id, img: Img, name, description, price, handleFavorites, ...rest }) {
  const navigate = useNavigate();
  const [ isFavorite, setIsFavorite] = useState(false);
  const [ counter, setCounter] = useState(1);
  
  function handleFavorites(){
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <Heart
        isFavorite={isFavorite}
        onClick={handleFavorites}
      >
      </Heart>
      <a onClick={() => navigate(`/productdetail/${id}`)}>
        <img src={Img}/>
      </a>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>{price}</h2>
      <div className="footerCard">
        <div className="stepper">
          <button
          className='counterButton'
          onClick={() => setCounter(counter > 1 ? counter - 1 : counter)}
          >
            <BiMinus size={25} color="white" />
          </button>
          <strong>
            {counter}
          </strong>
          <button
          className='counterButton'
          onClick={() => setCounter(counter >= 0 ? counter + 1 : counter)}
          >
           <BiPlus size={25} color="white" />
          </button>
        </div>
        <Button id="addFood" title="Add"/>
      </div>
    </Container >
  );
};