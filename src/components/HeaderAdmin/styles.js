import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 10.4rem;
  margin: 0 auto;
  
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .headerContent {
    max-width: 1120px;
    margin: 0 auto;
    height: 10.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6.3rem;

    .projectLogo {
      display: flex;
      align-items: center;
      gap: 1.1rem;
      flex-direction: row;
      width: 22rem;

      >img {
        width: 2.9rem;
        height: 2.9rem;
      };

      >h1 {
        white-space: nowrap;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        font-size: 2.5rem;
        font-weight: 700;
      };
    };

    .right {
      display: flex;
      align-items: center;
      margin-left: 1rem;
    }    

    button:nth-of-type(1) {
      margin-top: 0;
      margin-right: 2rem;
    };

    #command {
      width: 18.6rem;
      height: 5.6rem;
      margin: 0;
      padding: 1.2rem 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      border: none;
      border-radius: 5px;
      white-space: nowrap;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_HEADER};
      color: ${({ theme }) => theme.COLORS.WHITE};      
    };

    .logOut {
      cursor: pointer;
    };
    
  };

`;