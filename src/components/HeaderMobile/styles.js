import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10.4rem;
  padding: 4.3rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .body {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .list, .search {
    cursor: pointer;
  }

  .projectLogo {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    > img {
      width: 2.9rem;
      height: 2.9rem;
    };

    > h1 {
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-size: 2.4rem;
      font-weight: 700;
    };
  };

  .listClickedHide, .inputSearchClickedHide {
    display: none;
  };

  .listClicked {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    position: absolute;
    margin-top: 12rem;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: 15rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1.2rem;

    > button {
      margin: 0;
    };
  };

  .inputSearchClicked {
    align-items: center;
    justify-self: center;
    position: absolute;
    width: 40rem;
    margin-top: 9.7rem;
    margin-left: 30.5rem;
   
  };

`;