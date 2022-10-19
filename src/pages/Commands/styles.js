import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.4rem 1fr 10.4rem;
  grid-template-areas: 
  "header"
  "content"
  "footer"
  ;
  display: flex;
  flex-direction: column;
  width: 100%;  
  height: 100vh;
  margin: 0 auto;
  padding: 0;

  .commandsConteiner{
    grid-area: content;
    max-width: 1120px;
    height: 100%; 
    margin: 0 auto; 
    padding: 0 5.3rem 5rem 5.3rem; 
    
    h1 {
      font-family: ${({ theme }) => theme.FONTS.POPPINS};
      font-weight: 500;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      margin-top: 3.4rem;
      margin-bottom: 3.4rem;
    };
  
    table {
      border-collapse: collapse;
      max-width: 1120px;
      height: auto;
      margin: 0 auto; 
           
      border: 2px solid ${({ theme }) => theme.COLORS.TABLE_BORDER};


      ::-webkit-scrollbar {
        width: 20px;
      };

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
      };

      ::-webkit-scrollbar-thumb {
        border: 5px solid transparent;
        background-clip: padding-box;
        background-color: var(--scroll-color);
        border-radius: 10px;
      };

      thead {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 2.1rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        height: 6.4rem;

        .status, .code, .madeOn {
          text-align: left;
          width: 15.1rem;
          padding: 2.4rem;
          border: 2px solid ${({ theme }) => theme.COLORS.TABLE_BORDER};
        };
         .details {
          text-align: left;
          width: 57.6rem;
          padding: 2.4rem;
          
        };

        .status {
          border-top-left-radius: 10px;
        };
      };

      td {
        height: 5.4rem;
        padding: 2.4rem;
        font-family: ${({ theme }) => theme.FONTS.ROBOTO};
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        border: 2px solid ${({ theme }) => theme.COLORS.TABLE_BORDER};

        svg {
          margin-right: 0.8rem;
        };
      };
    };
};
`