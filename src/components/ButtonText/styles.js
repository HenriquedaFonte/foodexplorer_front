import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.button`
  margin-top: 3.2rem;
  font-size: 1.4rem;
  text-decoration: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;