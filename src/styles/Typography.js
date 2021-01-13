import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 200;
  font-display: swap;
  src:
    url('../assets/fonts/Inter-ExtraLight.woff2') format('woff2'),
    url('../assets/fonts/Inter-ExtraLight.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 300;
  font-display: swap;
  src: url('../assets/fonts/Inter-Light.woff2') format('woff2'),
       url('../assets/fonts/Inter-Light.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 400;
  font-display: swap;
  src: url('../assets/fonts/Inter-Regular.woff2') format('woff2'),
       url('../assets/fonts/Inter-Regular.woff') format('woff');
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 400;
  font-display: swap;
  src: url('../assets/fonts/Inter-Italic.woff2') format('woff2'),
       url('../assets/fonts/Inter-Italic.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 500;
  font-display: swap;
  src:
    url('../assets/fonts/Inter-Medium.woff2') format('woff2'),
    url('../assets/fonts/Inter-Medium.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 600;
  font-display: swap;
  src: url('../assets/fonts/Inter-SemiBold.woff2') format('woff2'),
       url('../assets/fonts/Inter-SemiBold.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 700;
  font-display: swap;
  src: url('../assets/fonts/Inter-Bold.woff2') format('woff2'),
       url('../assets/fonts/Inter-Bold.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 800;
  font-display: swap;
  src: url('../assets/fonts/Inter-ExtraBold.woff2') format('woff2'),
       url('../assets/fonts/Inter-ExtraBold.woff') format('woff');
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 900;
  font-display: swap;
  src: url('../assets/fonts/Inter-Black.woff2') format('woff2'),
       url('../assets/fonts/Inter-Black.woff') format('woff');
}
`;

export default Typography;
