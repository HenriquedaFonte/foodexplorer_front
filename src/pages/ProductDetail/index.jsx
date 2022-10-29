import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api'
import { useState, useEffect } from 'react' 

import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../components/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { Footer } from '../../components/Footer';



export function ProductDetail() {
  const [dish, setDish] = useState(null);
  const [counter, setCounter] = useState(1)
  const navigate = useNavigate();
  const params = useParams();
  const cartRecoverFromLocalStorage = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsList')) || [];
  const [cartProductsList, setCartProductsList] = useState(cartRecoverFromLocalStorage);


  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setDish(response.data);
    }
    fetchDish();
  }, []);
  
  function handleSetCart(){
    const dishName = dish.title;
    const dishAvatar = `${api.defaults.baseURL}/files/${dish.avatar}`;
    const dishPrice = dish.price;
    const dishId = dish.id;
    console.log(dish);
    const copyCartProductList = [...cartProductsList]
    const cartItem = copyCartProductList.find((item) => item.id === dish.id);
      if (!cartItem){
        copyCartProductList.push({
          id: dishId,
          name: dishName,
          avatar: dishAvatar,
          price: dishPrice,
          amount: counter
        })
      } else {
        cartItem.amount = cartItem.amount + dish.amount
      };
      setCartProductsList(copyCartProductList);
    };
    addLocalStorageCart() 


   
  function addLocalStorageCart() {
    localStorage.setItem('@foodexplorer:cartProductsList', JSON.stringify(cartProductsList));
  };

  
 
  return (
    <Container>
      <Header amount={cartProductsList.length}/>
      <div className="buttonBack">
        <ButtonText
          title="Back"
          icon={IoIosArrowBack}
          id="buttonBack"
          onClick={() => navigate(-1)}
        />
      </div>
      {
        dish &&      
      <div className="productDetailContainer">
        <div className="productDetailImage">
          <img src={`${api.defaults.baseURL}/files/${dish.avatar}`} />
        </div>
        <div className="productDetailDescription">
          <h1>{dish.title}</h1>
          <p>{dish.description}</p>
          <div className="productDetailIngredients">
            {dish.ingredients.map((ingredient, index) => (
              <div className="igredients" key={index}>
                <div className="image">
                  <img src={`${api.defaults.baseURL}/files/${ingredient.avatar}`} />
                </div>
                <p>{ingredient.name}</p>
              </div>
            ))};            
          </div>
          <div className="productDetailinfo">
            <h2>{dish.price + '$'}</h2>
            <div className="productDetailstepper">
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
            <Button id="addFood" title="Add" onClick={handleSetCart}/>
          </div>
        </div>
      </div>
      }
      <Footer className="footer" />
    </Container>
  );
};