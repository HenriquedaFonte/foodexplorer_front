import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'
import { Header } from '../../components/Header'
import bannerImg from '../../assets/bannerImg.png'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'


export function Favorites() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');
  const RecoverFromLocalStorage = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsList')) || [];


  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

     fetchDishes(); 
  },[search]);

  const favoritesLocalId = JSON.parse(localStorage.getItem('@foodexplorer:favorites'));
  const favoritedDishes = dishes.filter(dish => favoritesLocalId.includes(dish.id));

  
  return (
    <Container>
      <Header amount={RecoverFromLocalStorage.length}/>
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
            <Section dish={favoritedDishes} />          
        </div>
        }
      </div>
      <Footer/>
    </Container>
  );
};
