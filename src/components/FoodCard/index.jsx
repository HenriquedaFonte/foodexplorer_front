import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { FaTrashAlt} from 'react-icons/fa'

import { Container, Heart } from './styles'
import { Button } from '../Button'

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api'



export function FoodCard({
  id,
  img: Img,
  name,
  description,
  price,
  onSetFavorites,
  onSetCart
}){ 
  const {user} = useAuth();
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState(false)
  const [counter, setCounter] = useState(1)

  function handleFavorites() {
    setIsFavorite(!isFavorite)
    onSetFavorites(id)
  };

  function handleSetCart() {
    const cartProduct = {
      id: id,
      avatar: Img,
      amount: counter,
      name: name,
      price: price
    };
    onSetCart(cartProduct)
  };

  function handleDeleteFavorites(id) {
    setIsFavorite(!isFavorite)
    onSetFavorites(id)
  };

  async function handleRemoveDish() {
    const confirm = window.confirm(`Do you really want to remove ${name}?`);
    
    if (confirm) {
      await api.delete(`/dishes/${id}`);
      location.reload();
    };
  };


  return (
    <Container>
      { user.email === 'admin@email.com' ? 
        <><button
          id='trashIcon'
          onClick={handleRemoveDish}
        >
          <FaTrashAlt size={18} />
        </button>
        <a onClick={() => navigate(`/EditDish/${id}`)}>
          <img src={Img} />
        </a>
        </>
      :              
        <><Heart
          isFavorite={isFavorite}
          onClick={!isFavorite
            ? () => handleFavorites(id)
            : () => handleDeleteFavorites(id)}
        >
        </Heart>
        <a onClick={() => navigate(`/ProductDetail/${id}`)}>
          <img src={Img} />
        </a></>
      } 
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>{price + '$'}</h2>
      { user.email === 'admin@email.com' ? ''      
      :       
      <div className="footerCard">
        <div className="stepper">
          <button
            className="counterButton"
            onClick={() => setCounter(counter > 1 ? counter - 1 : counter)}
          >
            <BiMinus size={25} color="white" />
          </button>
          <strong>{counter}</strong>
          <button
            className="counterButton"
            onClick={() => setCounter(counter >= 0 ? counter + 1 : counter)}
          >
            <BiPlus size={25} color="white" />
          </button>
        </div>
        <Button id="addFood" title="Add" onClick={handleSetCart} />
      </div>
      }
    </Container>
  )
}
