import styled from "styled-components";
import openEye from "../../assets/eye.svg";
import closeEye from "../../assets/eye-off.svg";


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
};
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

  h1 {
    
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    font-weight: 500;
  };

  p {
    align-self: flex-start;
    margin-top: 3.2rem;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  };

  div {
    background: transparent;
  };

  .inputPassword {
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    margin-top: 4.5px;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    };

    button {
      position: absolute;

      margin-top: 0.8rem;
      margin-left: 180px;
      border: none;

      width: 24px;
      height: 24px;      
    };
 };

 #signUp:active{
    box-shadow: 0 0 0 0, inset 1px 1px 1px;
    transform: translate(2px, 2px);
  };

  .showPassword {
    background: url(${closeEye}) no-repeat center center;
  };

  .hidePassword {
    background: url(${openEye}) no-repeat center center;
  };
`;