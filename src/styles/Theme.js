// import { bp } from '../lib/breakpoints';

const theme = {
  colors: {
    clr1: '#3f00ff',
    clr2: '#352b81',
    clr3: '#4b45ba',
    clr4: '#482494',
    bg1: '#f9f7ed',
    bg2: '#f4f5ff',
    dark1: '#14181a',
    dark2: '#1d1f2a',
    grey15: '#e7e7ea',
    grey14: '#dddde1',
    grey13: '#d2d2d8',
    grey12: '#c8c8cf',
    grey11: '#bdbdc6',
    grey10: '#b3b3bd',
    grey09: '#a8a8b3',
    grey08: '#9e9eaa',
    grey07: '#9393a1',
    grey06: '#898998',
    grey05: '#7e7e8f',
    grey04: '#464650',
    grey03: '#3a3a42',
    grey02: '#2e2e35',
    grey01: '#222227',
  },

  breakpoints: {
    // mobileSm: `max-width: 320px`,
    mobileSm: `(max-width: ${bp.mSm}px)`,
    mobileMd: `(min-width: ${bp.mSm}px) and (${bp.mMd}px)`,
    mobileLg: `(${bp.mMd}px) and (${bp.mLg}px)`,
    tabletSm: `(${bp.mLg}px) and (${bp.tSm}px)`,
    tabletLg: `(${bp.tSm}px) and (${bp.tLg}px)`,
    desktopXs: `(${bp.tLg}px) and (${bp.dXs}px)`,
    desktopSm: `(${bp.dXs}px) and (${bp.dSm}px)`,
    desktopMd: `(${bp.dSm}px) and (${bp.dMd}px)`,
    desktopLg: `(${bp.dMd}px) and (${bp.dLg}px)`,
    desktopXl: `(${bp.dLg}px)`,
  },

  // fontFams: {
  //   display:
  //     'Telegraf, Helvetica Neue, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Arial, serif',
  //   grotesk:
  //     'SpaceGrotesk, Inter, Helvetica Neue, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
  //   sans:
  //     'PlexSans, Inter, Helvetica Neue, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Arial, sans-serif',
  //   mono:
  //     'InputMono, Fira Code, Fira Mono, IBM Plex Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  // },

  // fontSizes: {
  //   sDisplay: '7.2rem',
  //   s08: '0.8rem',
  //   s10: '1rem',
  //   s12: '1.2rem',
  //   s14: '1.4rem',
  //   s16: '1.6rem',
  //   s18: '1.8rem',
  //   s20: '2rem',
  //   s22: '2.2rem',
  //   s24: '2.4rem',
  //   s30: '3rem',
  //   s36: '3.6rem',
  //   s44: '4.4rem',
  //   s48: '4.8rem',
  //   s56: '5.2rem',
  //   s64: '6.4rem',
  // },

  // fontWeights: {
  //   w200: 200,
  //   w300: 300,
  //   w400: 400,
  //   w500: 600,
  //   w600: 600,
  //   w700: 700,
  //   w800: 800,
  //   w900: 900,
  // },

  // breakpointSizes: {
  //   mobileSm: 320,
  //   mobileMd: 400,
  //   mobileLg: 480,
  //   tabletSm: 600,
  //   tabletLg: 768,
  //   desktopXs: 900,
  //   desktopSm: 1080,
  //   desktopMd: 1280,
  //   desktopLg: 1440,
  // },

  effects: {
    hoverBrightness: 1.25,
    buttonEase: 'box-shadow 0.3s ease',
    linkEase: 'color 0.2s ease',
    cubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    transition: 'all 0.200ms cubic-bezier(0.645, 0.045, 0.355, 1)',
    boxShadow:
      '0 5px 10px -3px rgba(14, 13, 26, 0.12), 0 3px 16px 2px rgba(7, 48, 114, 0.12), 0 8px 12px 1px rgba(34, 0, 51, 0.04)',
  },

  // dimensions: {
  //   headerHeight: '70px',
  //   borderRadius: '6px',
  // },
};
export default theme;
