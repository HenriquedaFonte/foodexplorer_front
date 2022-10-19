import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.4rem 1fr 10.4rem;
  grid-template-areas: 
  "header"
  "content"
  "footer"
  ;
  width: 100%;
  height: 100vh;
  margin: 0 auto; 

  .content {    
    grid-area: content;
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-template-areas: "command payment";
    height: auto;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 5.3rem;
    gap: 4rem;
    display: flex;
    align-items: center;

    h1 {
      margin-top: 3.4rem;
      font-size: 3.2rem;
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .command {
      width: 44.4rem;
      height: 100%; 
      grid-area: command;

      h3 {
        margin-top: 1rem;
        font-family: ${({ theme }) => theme.FONTS.POPPINS};
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
      };
    };

    .payment {
      grid-area: payment;
      height: 100%;
    };

    .paymentType {
      /* margin-top: 3.2rem; */
      width: 53rem;
      height: 44rem;      
      
      .paymentOption {
        display: flex;
        width: 53rem;
        height: 8.1rem;       

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          width: 26.5rem;
          height: 8.1rem;
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
          color: ${({ theme }) => theme.COLORS.WHITE};
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

          svg {
            width: 3.5rem;
            height: 3.5rem;            
          };

        };

        .selected {
          background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        };
      };

      .paymentTransfer {
        height: 34.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        img {
          width: 25rem;
          align-items: center;
          svg {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
          };
        };
        button {
          margin-top: 2rem;
          width: 25rem;
        };
        button:active{
          box-shadow: 0 0 0 0, inset 2px 2px 2px;
          transform: translate(3px, 3px);
        };
      };  
      .paymentCart {
          height: 34.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
          
            button:active{
              box-shadow: 0 0 0 0, inset 2px 2px 2px;
              transform: translate(3px, 3px);
            };
      };    
    };
  };
`;

export const Form = styled.form`
  width: 25rem;
  height: 34.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  label {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  };

  input {
    width: 25rem;
    height: 4rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    ::placeholder {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    };
  }

  .cardData {
    width: 25rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;

    .inputLabelPosition {     
      display: flex;
      flex-direction: column;
     
      input {
        width: 8rem;
        height: 4rem;
      };
    };
    
  };


  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  };

  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  };
`;