import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    width: 100%;
    font-size: 1.6rem;
  }


  body {
    display: flex;
    flex-flow: column wrap;
    min-height: 100vh;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: #16191C;
    line-height: 1.4;
    overflow-x: hidden;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-kerning: normal;
  }


  a {
    text-decoration: none;
    display: inline-flex;
    position: relative;
    cursor: pointer;
    color: #16191C;
    font-weight: 500;
    &:hover,
    &:focus {
      color: #7000f8;
      filter: brightness(1.25);
      transition: color 0.2s ease;
    }
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  p {
    margin: 0 0 2rem 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }
`;

export default GlobalStyles;
