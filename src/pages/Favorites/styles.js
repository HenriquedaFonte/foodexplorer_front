import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    .homeContent {
      grid-area: content;
      height: 100%;
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 6.3rem;
  
    
    .banner {      
      height: 26rem;
      margin-top: 17rem;
      display: grid;
      grid-template-columns: 55% 45%;
      grid-template-areas: "img text";
      border-radius: 8px;
      background: Linear-Gradient(#091E26, #00131C);
      
      img {        
        grid-area: "img";
        margin-left: -7rem;
        margin-top: -13.6rem;
        width: 65rem;
        height: 41rem;
      };

      .textBanner {        
        grid-area: "text";
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          font-size: 5rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.WHITE_100}; 
        };
      };
  };
};

  .title {
    font-size: 4rem;
    margin-bottom: 4rem;
  }

  .section{
    margin-top: 15rem;
    height: 70%;
    h1 {
      font-size: 3rem;
    }
  };

  footer {
    position: absolute;
    bottom: 0;
  }


`;