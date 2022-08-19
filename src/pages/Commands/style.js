import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
  height: 100vh;
  margin: 0 auto;
  padding: 0;

  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    margin-top: 3.4rem;
    margin-bottom: 3.4rem;
  }

  .commandsConteiner{
    max-width: 1120px;
    min-height: 50rem; 
    margin: 0 auto; 
    padding: 0 5.3rem 5rem 5.3rem;      
  
    table {
      border-collapse: collapse;
      max-width: 1120px;
      height: auto;
      margin: 0 auto; 
           
      border: 2px solid ${({ theme }) => theme.COLORS.TABLE_BORDER};

      thead {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        height: 6.4rem;

        .status, .code, .madeOn {
          text-align: left;
          width: 15.1rem;
          padding: 2.4rem;
          border: 2px solid ${({ theme }) => theme.COLORS.TABLE_BORDER};
        }
         .details {
          text-align: left;
          width: 57.6rem;
          padding: 2.4rem;
          
        }

        .status {
          border-top-left-radius: 10px;
        }
      }


      th:last-child {
        border-top-right-radius: 1.1rem;
      }
      
      td {
        height: 5.4rem;
        padding: 2.4rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        border: 2px solid ${({ theme }) => theme.COLORS.TABLE_BORDER};

        svg {
          margin-right: 0.8rem;
        }

      }
    }

} 
  .footer {
    border: 2px solid red;
    position: absolute;
    bottom: 0;
  }

`