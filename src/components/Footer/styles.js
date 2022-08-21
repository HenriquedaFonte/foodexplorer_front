import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  width: 100%;
  height: 10.4rem;
  margin: 0 auto;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .footerContent { 
    max-width: 1120px;
    margin: 0 auto;
    height: 10.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6.3rem;
    
    
    .projectLogo {
      display: flex;
      align-items: center;
      gap: 1.1rem;
      flex-direction: row;
  
      img {
        width: 2.9rem;
        height: 2.9rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      };
  
      h1 {
        white-space: nowrap;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-size: 2.5rem;
        font-weight: 700;
      };
    };
  
    p {
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 1.4rem;
      font-weight: 400;
    };
  };
`