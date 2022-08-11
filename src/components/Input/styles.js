import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  margin-top: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 20px 25px 20px 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  >input {
    width: 100%;
    height: 4.8rem;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    margin-left: 1rem;
    ::placeholder {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      font-size: 1.6rem;
    };
  };
`;