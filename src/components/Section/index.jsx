
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { FoodCard } from '../FoodCard'
import { Container } from './styles'


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

export function Section() {

  const foodCardArray = [
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
  const foodCardArrayDesserts = [
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
  const foodCardArrayDrink = [
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

  return (
    <Container>
      <div className="sectionTitle">
        <h1>Main dishes</h1>
      </div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >       
        {foodCardArray.map(foodCard => (
          <SwiperSlide className="cards">
            <a href="{/}">
              <FoodCard
                img={foodCard.img}
                name={foodCard.name}
                description={foodCard.description}
                price={foodCard.price}
              />
            </a>
          </SwiperSlide>
          ))};    
        </Swiper>
      </div>
      <div className="sectionTitle">
        <h1>Desserts</h1>
      </div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >       
        {foodCardArrayDesserts.map(foodCard => (
          <SwiperSlide className="cards">
            <a href="{/}">
              <FoodCard
                img={foodCard.img}
                name={foodCard.name}
                description={foodCard.description}
                price={foodCard.price}
              />
            </a>
          </SwiperSlide>
          ))};    
        </Swiper>
      </div>
      <div className="sectionTitle">
        <h1>Drinks</h1>
      </div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >       
        {foodCardArrayDrink.map(foodCard => (
          <SwiperSlide className="cards">
            <a href="{/}">
              <FoodCard
                img={foodCard.img}
                name={foodCard.name}
                description={foodCard.description}
                price={foodCard.price}
              />
            </a>
          </SwiperSlide>
          ))};    
        </Swiper>
      </div>
    </Container>
  )
}
