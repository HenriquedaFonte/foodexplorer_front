import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    margin-top: 10rem;
    width: 50%;
    transform-origin: center center;
    animation: loader 0.9s steps(8) infinite
  };
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
;