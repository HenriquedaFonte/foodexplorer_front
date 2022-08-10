import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  margin-top: 3.2rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;

`;