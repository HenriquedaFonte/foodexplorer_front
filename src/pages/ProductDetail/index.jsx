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
  const RecoverFromLocalStorage = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsList')) || [];
  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setDish(response.data);
    }
    fetchDish();
  }, [])
  console.log(dish);
  
 
  return (
    <Container>
      <Header amount={RecoverFromLocalStorage.length}/>
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
              <div className="igredients">
                <div className="image">
                  <img src={`${api.defaults.baseURL}/files/${ingredient.avatar}`} key={index}/>
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
            <Button id="addFood" title="Add"  />
          </div>
        </div>
      </div>
      }
      <Footer className="footer" />
    </Container>
  );
};