import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'
import { Header } from '../../components/Header'
import bannerImg from '../../assets/bannerImg.png'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'


export function Favorites() {
  const cartRecoverFromLocalStorage = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsList')) || [];
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');
  const [cartProductsList, setCartProductsList] = useState(cartRecoverFromLocalStorage);


  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

     fetchDishes(); 
  },[search]);

  const favoritesLocalId = JSON.parse(localStorage.getItem('@foodexplorer:favorites'));
  const favoritedDishes = dishes.filter(dish => favoritesLocalId?.includes(dish.id));

  function handleSetCart(cartProduct){
    const copyCartProductList = [...cartProductsList]
    const cartItem = copyCartProductList.find((item) => item.id === cartProduct.id); 

    if (!cartItem){
      copyCartProductList.push(cartProduct)
    } else {
      cartItem.amount = cartItem.amount + cartProduct.amount
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
      <div className="homeContent">
        <div className="banner">
          <img src={bannerImg} />
          <div className="textBanner">
            <h1>Favorite Dishes</h1>
          </div>
          <div className="title">
            <h1>Favorites</h1>
          </div>
        </div>
        { dishes &&
        <div className="section">                      
            <Section 
              dish={favoritedDishes} 
              onSetCart={handleSetCart}
            />          
        </div>
        }
      </div>
      <Footer/>
    </Container>
  );
};
