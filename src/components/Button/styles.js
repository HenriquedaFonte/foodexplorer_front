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
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0.8px 0.7px 1px;  
`;