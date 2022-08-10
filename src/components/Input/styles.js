import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  align-items: center;

  >input {
    width: 100%;
    height: 56px;

    padding: 20px 25px 20px 10px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    ::placeholder {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    }

  }

  > svg {
    margin-left: 1.5rem;
    ::fill {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }



  
`;