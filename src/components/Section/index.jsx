
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { FoodCard } from '../FoodCard'
import { Container } from './styles'
import { useState } from "react";

export function Section({category, products, onSetfavorites, children}) {
  const [favoritesList, setfavoritesList] = useState([]);

  function handleSetfavorites(favorites) {
    setfavoritesList([favorites]);    
    onSetfavorites(favoritesList);
    
  };

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
          loop={false}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >   
        <div className="shadeLeft"></div>    
        {products.map((product, index) => (
          <SwiperSlide className="cards" key={index}> 
              <FoodCard
                id={product.id}
                favorite={product.favorite}
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
                onSetfavorites={handleSetfavorites}
              />
          </SwiperSlide>
          ))};   
        <div className="shadeRight"></div>   
        </Swiper>
      </div>      
    </Container>
  );
};
