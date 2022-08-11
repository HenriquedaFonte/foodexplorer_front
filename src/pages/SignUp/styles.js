import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10rem;
  align-items: center;

  .projectLogo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.2rem;
    margin-bottom: 6rem;

    >img {
      width: 4.2rem;
      height: 4.7rem;
    };

    >h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 4.2rem;
      font-weight: 700;
    };
  };


  @media (min-width: 800px) {
  margin-top: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "title form";

  .projectLogo {
    grid-area: title;
    margin: 0 auto;
    gap: 2.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    >img {
      width: 4.2rem;
      height: 4.7rem;
    };

    >h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 4.2rem;
      font-weight: 700;
    };
  };

}
  `;

export const Form = styled.form`
  grid-area: form;
  display: flex;
  margin: 0 auto;
  flex-direction: column;  
  max-width: 47.6rem;
  height: 60rem;
  padding: 5.4rem 6.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 16px;
  text-align: center;

  >h1 {
    
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    font-weight: 500;
  };

  >p {
    align-self: flex-start;
    margin-top: 3.2rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  };

  div {
    background: transparent;
  }

`;