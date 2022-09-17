import {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPlus, BiMinus } from 'react-icons/bi';

import { Container, Heart } from './styles';
import { Button } from '../Button';

import { useAuth } from '../../hooks/auth';


export function FoodCard({ id, img: Img, name, description, price, handleFavorites, onSetfavorites, children, ...rest }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [ isFavorite, setIsFavorite] = useState(false);
  const [ counter, setCounter] = useState(1);
  const [ favorites, setFavorites] = useState([]);
   

  function handleFavorites(){    
    setIsFavorite(!isFavorite);  
    // localStorage.setItem("@foodexplorer:favorites", JSON.stringify(id)); 
    setFavorites([...favorites, id]);
   

    onSetfavorites(favorites);
    console.log(favorites)
  };
  
  function handleDeleteFavorites(id){    
    setIsFavorite(!isFavorite);  
    setFavorites(prevstate => prevstate.filter(favorites => favorites !== id));
  };

  return (
    <Container>
      <Heart
        isFavorite={isFavorite}
        onClick={!isFavorite ? () => handleFavorites(id) : () => handleDeleteFavorites(id)}
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