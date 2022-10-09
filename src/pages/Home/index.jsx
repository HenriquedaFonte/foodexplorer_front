
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
  const [cartProductsList, setCartProductsList] = useState(cartRecoverFromLocalStorage);

  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

     fetchDishes(); 
  },[search]);

  console.log('dishes', dishes);

  async function handleSetfavorites(id) {

    // if(favoriteList.includes(id)) {
    //   favoriteList = (favoriteList.filter(favoriteId => favoriteId !== id));
    // }else {
    //   favoriteList =([...favoriteList, id]);       
    // };
    addLocalStorageFavorites()
  };
  
  function addLocalStorageFavorites() {
    localStorage.setItem('@foodexplorer:favorites', JSON.stringify(favoriteList));
  };

  function handleSetCart(cartProduct){
    setCartProductsList([...cartProductsList, cartProduct]);  
    setAmount(prevstate => prevstate + cartProduct.amount);   
  };
  addLocalStorageCart() 
  console.log('copy 2', cartProductsList);

   
  function addLocalStorageCart() {
    localStorage.setItem('@foodexplorer:cartProductsList', JSON.stringify(cartProductsList));
  };


  return (
    <Container>
      <Header amount={cartProductsList.length} onChange={e => setSearch(e.target.value)}/>
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
