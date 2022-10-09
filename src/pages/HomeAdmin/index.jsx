import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin';
import bannerImg from '../../assets/bannerImg.png'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'




export function HomeAdmin() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

     fetchDishes(); 
  },[search]);

  return (
    <Container>
      <HeaderAdmin onChange={e => setSearch(e.target.value)}/>
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
            />
        </div>
      </div>
      <Footer />
    </Container>
  );
}
