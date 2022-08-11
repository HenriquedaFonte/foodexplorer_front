import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { SignIn } from './pages/SignIn/index';
import { SignUp } from './pages/SignUp/index';
import { Home } from './pages/Home/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Home />       
    </ThemeProvider>
  </React.StrictMode>
)
