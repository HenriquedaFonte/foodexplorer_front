
import { api } from '../../services/api'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { FoodCard } from '../FoodCard'
import { Container } from './styles'



export function Section({dish, onSetFavorites, onSetCart}) {


  function handleSetfavorites(id) {
    onSetFavorites(id);
  };
  function handleSetCart(cartProduct) {
    onSetCart(cartProduct);
  };

  return (
    <Container>
      <div className="sectionTitle">
        <h1>Main Dishes</h1>
      </div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >   
        <div className="shadeLeft"></div>    
        {dish.filter(dish => dish.category == "Main Dish").map((dish, index) => (
          <SwiperSlide className="cards" key={index}> 
              <FoodCard
                id={dish.id}
                favorite={dish.favorite}
                img={`${api.defaults.baseURL}/files/${dish.avatar}`}
                name={dish.title}
                description={dish.description}
                price={dish.price}
                ingredients={dish.ingredients}
                onSetFavorites={handleSetfavorites}
                onSetCart={handleSetCart}
              />
          </SwiperSlide>
          ))};   
        <div className="shadeRight"></div>   
        </Swiper>
      </div>      <div className="sectionTitle">
        <h1>Dessert</h1>
      </div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >   
        <div className="shadeLeft"></div>    
        {dish.filter(dish => dish.category == "Dessert").map((dish, index) => (
          <SwiperSlide className="cards" key={index}> 
              <FoodCard
                id={dish.id}
                favorite={dish.favorite}
                img={`${api.defaults.baseURL}/files/${dish.avatar}`}
                name={dish.title}
                description={dish.description}
                price={dish.price}
                onSetFavorites={handleSetfavorites}
                onSetCart={handleSetCart}
              />
          </SwiperSlide>
          ))};   
        <div className="shadeRight"></div>   
        </Swiper>
      </div>      <div className="sectionTitle">
        <h1>Drink</h1>
      </div>
      <div className="carousel">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >   
        <div className="shadeLeft"></div>    
        {dish.filter(dish => dish.category == "Drink").map((dish, index) => (
          <SwiperSlide className="cards" key={index}> 
              <FoodCard
                id={dish.id}
                favorite={dish.favorite}
                img={`${api.defaults.baseURL}/files/${dish.avatar}` }
                name={dish.title}
                description={dish.description}
                price={dish.price}
                onSetFavorites={handleSetfavorites}
                onSetCart={handleSetCart}
              />
          </SwiperSlide>
          ))};   
        <div className="shadeRight"></div>   
        </Swiper>
      </div>      
      
    </Container>
  );
};
