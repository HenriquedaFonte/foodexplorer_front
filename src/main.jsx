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
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductDetail } from './pages/ProductDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <ProductDetail />       
    </ThemeProvider>
  </React.StrictMode>
)
