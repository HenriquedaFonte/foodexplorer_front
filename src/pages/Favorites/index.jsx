import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'
import { Header } from '../../components/Header'
import bannerImg from '../../assets/bannerImg.png'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'


export function Favorites() {
  const newData = [];
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

     fetchDishes(); 
  },[search]);

  // const favoritesLocal = JSON.parse(localStorage.getItem('@foodexplorer:favorites'));
  // let newFavoriteList = data.reduce((prev, next) => prev.concat(next.products), []);

  // if(favoritesLocal){
  //   favoritesLocal.forEach(favorited => updateFavorites(favorited));
  // };

  // function updateFavorites(favorite) {
  //   newData.push(newFavoriteList.find(obj => obj.id === favorite));
  // }; 
 console.log('favorites dishes', dishes);
 const dishesFavorites = dishes.filter((dish => dish.favorite == 1))
  
  return (
    <Container>
      <Header />
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
        <div className="section">                      
            <Section dish={dishesFavorites} />          
        </div>
      </div>
      <Footer/>
    </Container>
  );
};
