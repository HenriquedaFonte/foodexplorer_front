import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem;
  gap: 1.6rem;
  width: 30rem;
  height: 51.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};

  #favorite {
    margin-top: 2.1rem;
    margin-bottom: -1rem;
    align-self: flex-end;
  }

  img {
    width: 17.6rem;
  }

  h1 {    
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  h2 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 3.2rem;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  .footerCard {
    width: 23rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .stepper {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      
      strong {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }

    #addFood{
      margin-top: 0;
    }
  };



  
`;