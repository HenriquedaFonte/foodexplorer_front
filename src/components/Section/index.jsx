
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { FoodCard } from '../FoodCard'
import { Container } from './styles'

export function Section({category, products}) {
  return (
    <Container>
      <div className="sectionTitle">
        <h1>{category}</h1>
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
        <div className="shadeLeft"></div>    
        {products.map(product => (
          <SwiperSlide className="cards">
            <a href="{/}">
              <FoodCard
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </a>
          </SwiperSlide>
          ))};   
        <div className="shadeRight"></div>   
        </Swiper>
      </div>      
    </Container>
  );
};
