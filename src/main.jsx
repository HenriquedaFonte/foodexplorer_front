import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import "swiper/css/bundle";


import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { SignIn } from './pages/SignIn/index';
import { HeaderMobile } from '../src/components/HeaderMobile';
import { SignUp } from './pages/SignUp/index';
import { Home } from './pages/Home/index';
import { Section } from './components/Section';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Home />       
    </ThemeProvider>
  </React.StrictMode>
)
