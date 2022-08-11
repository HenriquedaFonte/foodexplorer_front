import { createGlobalStyle } from 'styled-components'; 

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  
  :root{
    font-size:62.5%;
    @media(max-width:2200px){
      font-size: 65%;
    }
    @media(max-width:1200px){
      font-size: 60%;
    }
    @media(max-width:1080px){
      font-size: 55%;
    }
    @media(max-width: 900px){
      font-size: 50%;
    }
     @media(max-width: 790px){
      font-size: 45%;
    }    
  };

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  body, input, button, textarea {
    -webkit-fonte-smoothing: antialiased;
    outline: none;
  };
  
  a {
    text-decoration: none;
  };

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  };

  button:hover, a:hover {
    filter: brightness(0.9);
  };
  
  `;