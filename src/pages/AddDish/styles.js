import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.4rem 3rem 1fr 10.4rem;
  grid-template-areas: 
  "header"
  "button"
  "content"
  "footer"
  ;
  width: 100%;
  height: 100vh;
  margin: 0 auto; 

  .buttonBack { 
    grid-area: button;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto; 
    
    #buttonBack{
      grid-area: button;
      display: flex;
      align-items: center;
      margin-top: 1rem; 
      margin-bottom: 0;
      margin-left: 5.4rem;     
      font-size: 2rem; 
          
      svg {
        width: 3rem;
        height: 2.5rem;
      };
    };
  };
`;

export const Form = styled.form`
  grid-area: content;
  width: 100%;
  max-width: 1120px;
  margin: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  
  h1 {
    margin-top: 1rem;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  };

  .container {
    width: 100%;
    max-width: 1120px;
    display: flex;
    flex-direction: column;
    padding: 0 6rem;
    gap: 2rem;
  };

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE}

  };

  #dishImg {
    width: 22rem;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
  };

  #addDishImgButton {
    position: absolute;
    margin-top: 3.1rem;
    margin-left: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
    background-color: transparent;
    border: none;

    svg {
      width: 3rem;
      height: 3rem;
    }
  };

  .inputLabelPosition {
    display: flex;
    flex-direction: column;

    input[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    };
    input[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;
    };

  };

  .divIngredients {
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 76rem;
    /* height: 4.8rem; */
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    padding: 0.5rem 1rem;
    gap: 24px;
  }

  div {
    display: flex;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    svg {
      width: 3rem;
      height: 2.5rem;
      fill: white;
    };
  };

  #dishName {
    width: 47rem;
  };

  select {
    margin-top: 2.2rem;
    width: 20rem;
    height: 3rem;
    align-self: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  };

  #ingredients {
    width: 73rem;
  };

  #description {
    width: 100.5rem;
    height: 12rem;
    margin-bottom: 0;
    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  };

  #buttonAddDish { 
    margin-top: 0;
    width: 30rem;
    align-self: flex-end;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  };

`;

export const InputUploadImg = styled.input`
  padding-left: 7rem;
  height: 4.8rem;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  
  ::placeholder {
    color: ${({ theme }) => theme.COLORS.WHITE};
  };

`
