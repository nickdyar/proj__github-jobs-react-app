import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  html {
    height: 100%;
    width: 100%;
    font-size: 1.6rem;
  }

  html,
  body,
  button,
  input {
    line-height: 1.5;
    font-feature-settings: "liga", "dlig", "kern";
    font-variant: common-ligatures;

  }

  body {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 300;
    font-family: Inter, 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    margin: 0;
    background-color: #fcfcfc;
    min-height: 100vh;
    overflow-x: hidden;
    font-kerning: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1;
    letter-spacing: 0.1px;
  }

  a {
    ${'' /* text-decoration: none; */}
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

  p {
    margin: 0 0 2rem 0;
    font-size: 1.4rem;
    word-break: break-word;
    ${'' /* line-height: 1.25; */}
  }

  p:last-child,
  p:last-of-type {
    margin: 0;
  }

  strong {
    font-size: 1.4rem;
  }
`;

export default GlobalStyle;
