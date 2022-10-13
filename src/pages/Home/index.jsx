
import { Container } from './styles'
import { Header } from '../../components/Header'
import bannerImg from '../../assets/bannerImg.png'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'

import { useState, useEffect } from 'react'


export function Home() {
  
  const cartRecoverFromLocalStorage = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsList')) || [];
  let favoriteList = [];
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

  function handleSetfavorites(id) {
    if(favoriteList.includes(id)) {
      favoriteList = (favoriteList.filter(favoriteId => favoriteId !== id));
    }else {
      favoriteList =([...favoriteList, id]);       
    };
    addLocalStorageFavorites()
  };
  
  function addLocalStorageFavorites() {
    localStorage.setItem('@foodexplorer:favorites', JSON.stringify(favoriteList));
  };

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
      <Header amount={cartProductsList.length} onChange={setSearch}/>
      <div className='homeContent'>
        <div className='banner'>
          <img src={bannerImg} />
          <div className='textBanner'>
            <h1>Incredible flavors</h1>
            <p>Highly selected ingredients</p>
          </div>
        </div>
        <div className='section'>
            <Section 
              dish={dishes} 
              onSetFavorites={handleSetfavorites}   
              onSetCart={handleSetCart}                      
            />
        </div>
      </div>
      <Footer />
    </Container>
  );
};
