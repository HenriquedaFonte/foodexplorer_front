import styled from 'styled-components'

import  heart from '../../assets/heart.svg';
import  heartFill from '../../assets/heart-fill.svg';


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


  img {
    width: 17.6rem;
  };

  a {
    transition: transform 0.3s;
  };

  a:hover {
    transform: scale(1.1);
  };

  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  };

  p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  };

  h2 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 3.2rem;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BLUE};
  };

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
      };
    };

    #addFood {
      margin-top: 0;
    };
    #addFood:active{
      box-shadow: 0 0 0 0, inset 2px 2px 2px;
      transform: translate(3px, 3px);
    };
  };

  .counterButton {
    z-index: 100;
    background: transparent;
    border: none; 
  };
`;

export const Heart = styled.button`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: -5px;
  border: none;
  width: 28px;
  height: 28px;
  background: ${({isFavorite}) => isFavorite ? `url(${heartFill}) no-repeat center center` : `url(${heart}) no-repeat center center`};

`;
