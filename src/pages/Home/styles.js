import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .homeContent {
      height: 100%;
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 9.3rem;
  
    
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
        margin-top: -14rem;
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
          font-size: 4rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.WHITE_100}; 
        };

        p {
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.WHITE_100}; 
        }; 
      };
  };
}
`;