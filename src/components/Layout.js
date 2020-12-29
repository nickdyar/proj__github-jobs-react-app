import React from 'react';
import { ThemeProvider } from 'styled-components';
// import Head from './elements/Head';
// import Nav from './Nav';
// import Footer from './Footer';
// import Typography from '../styles/Typography';
import Theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    {/* <Head /> */}
    <GlobalStyle />
    {/* <Typography /> */}
    {/* <Nav /> */}
    {children}
    {/* <Footer /> */}
  </ThemeProvider>
);

export default Layout;
