import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0,0,0,0.95);

  .containerPopup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 4rem;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 5px;
  };

  .headerPopup { 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;

    h1 {
      white-space: nowrap;
      width: 70%;
      padding-left: 5px;
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    };
    
    #buttonBack{
      width: 30%;
      display: flex;      
      align-items: center;
      font-size: 2rem; 
      margin-top: 8px;
      padding: 0;
      color: ${({ theme }) => theme.COLORS.GRAY_100};          
      svg {
        width: 2.5rem;
        height: 2.5rem;
      };
    };
  };

  .inputLabelPosition {
    display: flex;
    flex-direction: column;
  };
  
  label {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  };

  #ingredientImg {
    width: 16rem;
    font-size: 1.5rem;
  };
  
  #addingredientImgButton {
    position: absolute;
    margin-top: 3.8rem;
    margin-left: 0.5rem;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: none;
    
    svg {
      width: 3rem;
      height: 3rem;
      fill: white;
    }
  };

  #ingredientName {
    width: 20rem;
    height: 4.8rem;
    padding-left: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    };
  };

  #buttonAdd {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  };

`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin: auto;
  gap: 2rem;
`

export const InputForm = styled.input`
  padding-left: 4rem;
  height: 4.8rem;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  
  ::placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE};
  };
`;