import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto; 

  .productDetailContainer {
    height: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 5.3rem 5rem 5.3rem;
    gap: 4rem;
    display: flex;
    align-items: center;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas: "img description";

    .productDetailImage {      
      img {
        grid-area: img;
        width: 38rem;
      }

      #productDetailBack {
        display: flex;
        align-items: center;
        width: 9rem;
        margin-top: 1rem;
        font-size: 2.4rem;  
      
        svg {
          width: 3.5rem;
          height: 3.8rem;
        }
      }
    }


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
      }
  
      p {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
  
      h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.BLUE};
      }
    
      .productDetailIngredients {
        display: flex;

        .igredients {
          max-width: 7.2rem;
          height: 9.8rem;
        }

        img {
          width: 7rem;
        }

        p {
          font-size: 1.8rem;
        }
      }

      .productDetailinfo {
        display: flex;
        align-items: center;
        white-space: nowrap;      

        .productDetailstepper {
          margin-left: 6rem;
          margin-right: 4ren;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          
          Strong {
            color: white;
            font-size: 2rem;
          }
        }

        button {
          max-width: 9rem;
          margin-left: 4rem;
          margin-top: 0;
        }
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
  
`