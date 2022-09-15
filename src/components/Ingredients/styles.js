import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 18rem;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
    border-radius: 10px;

  button {
    margin-top: 0.2rem;
    border: none;
    background: none;
  };

  .button-delete {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  };

  .button-add {
    color: ${({ theme }) => theme.COLORS.GREEN};
  };

  input {
    width: 15rem;
    height: 1rem;
    padding: 1.5rem;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    };
  };
`;
