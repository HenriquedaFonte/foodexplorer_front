import { Header } from '../../components/Header';
import { Container } from './styles';
import bannerImg from '../../assets/bannerImg.png';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

import shrimpPasta from '../../assets/food2.png'
import parmaToast from '../../assets/food1.png'
import molaSalad from '../../assets/food4.png'
import ravanelloSalad from '../../assets/food3.png'
import prugnaPie from '../../assets/dessert1.png'
import peachyPastrie from '../../assets/dessert2.png'
import macarons from '../../assets/dessert3.png'
import damascusCake from '../../assets/dessert4.png'
import passionFruitDrink from '../../assets/drink1.png'
import teDAutunno from '../../assets/drink2.png'
import espresso from '../../assets/drink3.png'
import pomoBourbon from '../../assets/drink4.png'

export function Home() {

  const data = [
    {
      category:"Main Menu",
      products:[
        {
          img: `${shrimpPasta}`,
          name: 'Spaguetti Gambe',
          description: 'Fresh pasta with toast shrimps and pesto.',
          price: '34.97$'
        },
        {
          img: `${parmaToast}`,
          name: 'Parma Toast',
          description: 'Parma ham and arugula in a naturally leavened bread.',
          price: '14.97$'
        },
        {
          img: `${molaSalad}`,
          name: 'Mola Salad',
          description:
            'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
          price: '9.97$'
        },
        {
          img: `${ravanelloSalad}`,
          name: 'Ravanello Salad',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: '23.97$'
        },
        {
          img: `${ravanelloSalad}`,
          name: 'Ravanello Salad',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: '23.97$'
        }
      ]
    },
    {
      category:"Dessert Menu",
      products:[
        {
          img: `${prugnaPie}`,
          name: 'Prugna Pie',
          description: 'Fresh pasta with toast shrimps, pesto and arugula.',
          price: '34.97$'
        },
        {
          img: `${peachyPastrie}`,
          name: 'Peachy Pastrie',
          description: 'Parma ham and arugula in a naturally leavened bread.',
          price: '14.97$'
        },
        {
          img: `${macarons}`,
          name: 'Macarons',
          description:
            'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
          price: '9.97$'
        },
        {
          img: `${damascusCake}`,
          name: 'Damascus Cake',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: '23.97$'
        },
        {
          img: `${damascusCake}`,
          name: 'Damascus Cake',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: '23.97$'
        }
      ]
    },
    {
      category:"Drinks",
      products:[
        {
          img: `${passionFruitDrink}`,
          name: 'Spaguetti Gambe',
          description: 'Fresh pasta with toast shrimps, pesto and arugula.',
          price: '34.97$'
        },
        {
          img: `${espresso}`,
          name: 'Espresso',
          description: 'Parma ham and arugula in a naturally leavened bread.',
          price: '14.97$'
        },
        {
          img: `${teDAutunno}`,
          name: 'Tè d Autunno',
          description:
            'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
          price: '9.97$'
        },
        {
          img: `${pomoBourbon}`,
          name: 'Pomo Bourbon',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: '23.97$'
        },
        {
          img: `${pomoBourbon}`,
          name: 'Pomo Bourbon',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: '23.97$'
        }
      ]
    }

  ]
  return(
    <Container>
      <Header/> 
      <div className="homeContent">             
        <div className="banner">
          <img src={bannerImg} />
          <div className="textBanner">
            <h1>Incredible flavors</h1>
            <p>Highly selected ingredients</p>
          </div>
        </div> 
        <div className="section">
          {data.map(({category, products}) => (
            <Section category={category} products={products}/>
          ))};  
        </div>
      </div>
      <Footer />       
    </Container>
  );
};