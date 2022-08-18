import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4.8rem; 
  width: 100%;
  height: 100%;
  position: relative;

  .sectionTitle {
    margin-bottom: 4rem;
  }
  
  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 3.2rem;
    white-space: nowrap;
  };


  .swiper {
    width: 100%;
    height: 100%;
    
  }

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    scroll-snap-align: center;    
  }

  .shadeLeft {
    background: linear-gradient(90deg, #000A0F, transparent);
    z-index: 100;
    position: absolute;
    width: 10rem;
    height: 51rem;
    margin-top: -51rem;    
    
  }

  .shadeRight {
    background: linear-gradient(270deg, #000A0F, transparent);
    z-index: 100;
    position: absolute;
    width: 10rem;
    height: 51rem;
    margin-top: -52.3rem;
    right: 0;    
    
  }

  .swiper-button-prev{
    z-index: 200;
    color: #ffffff;  
   
  }

  
  
  .swiper-button-next{
    z-index: 200;
    color: #ffffff;    
  }

`; 