import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4.8rem;  
  
  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 3.2rem;
    white-space: nowrap;
  };

  .carousel {
    display: flex;
    border: 1px solid red;
    gap: 2.7rem;
    overflow-x: auto;   
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  };
   

  .cards {
    scroll-snap-align: center;
  };
  
`; 