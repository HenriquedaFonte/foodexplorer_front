import styled from "styled-components";

export const Container = styled.div`  
  display: grid;
  grid-template-rows: 10.4rem 5rem 1fr 10.4rem;
  grid-template-areas: 
  "header"
  "button"
  "content"
  "footer"
  ;
  width: 100%;
  height: 100vh;
  margin: 0 auto; 

  .buttonBack { 
    width: 100%;
    max-width: 1120px;
    margin: 0 auto; 
    
    #buttonBack{
      grid-area: button;
      display: flex;
      align-items: center;
      margin-top: 1rem;      
      margin-left: 5.4rem;     
      font-size: 2.4rem; 
          
      svg {
        width: 3.5rem;
        height: 3rem;
      };
    };
  };

  .productDetailContainer {
    grid-area: content;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas: "img description";
    height: auto;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 5.3rem;
    gap: 8rem;
    display: flex;
    align-items: center;

   
    .productDetailImage {   
      grid-area: img;   

      img {       
        max-width: 35rem;
        max-height: 35rem;
      };
    };


    .productDetailDescription {      
      grid-area: description;
      display: flex;
      flex-direction: column;
      max-width: 60rem;
      gap: 2.5rem;

      h1 {    
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-size: 4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      };
  
      p {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      };
  
      h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.BLUE};
      };
    
      .productDetailIngredients {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 3rem;

        .igredients {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 7.2rem;
          height: 9.8rem;
          gap: 1.5rem;

          .image {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4rem;
            height: 4rem;
          }

        };

        img {
          width: 7rem;
        };

        p {
          font-size: 1.8rem;
        };
      };

      .productDetailinfo {
        width: 100%;
        display: flex;
        align-items: center;
        white-space: nowrap;      

      .productDetailstepper {
        display: flex;
        align-items: center;
        margin-left: 5rem;
        margin-right: 5rem;
        width: 10rem;
        gap: 2rem;
       

        strong {
          width: 5rem;
          font-size: 2.4rem;
          color: ${({ theme }) => theme.COLORS.WHITE_100};
        };
      };  

      .counterButton {
        padding: 0.5rem;
        background: transparent;
        border: none; 
      };

        button {
          max-width: 15rem;
          margin-left: 0rem;
          margin-top: 0;
        };
        button:active{
          box-shadow: 0 0 0 0, inset 2px 2px 2px;
          transform: translate(3px, 3px);
        };
      };
    };
  };
  
`