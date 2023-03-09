import { css } from '@emotion/react'
// otf

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'roketregular';
    font-style: normal;
    font-weight: 500;
    src: url('/font/RcRocketRegular.otf') format('otf');
  }

  @font-face {
    font-family: 'Bebas';
    src: url('/font/BebasNeue-Regular.ttf');
  }

  @font-face {
    font-family: 'Inter';
    src: url('/font/Inter-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('/font/NotoSans/NotoSansKR-Regular.otf') format('otf');
  }

  html {
    margin: 0;
    box-sizing: border-box;
    font-family: 'roketregular';
    overflow-x: hidden;
  }
  body {
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    p {
      margin: 0;
      padding: 0;
      user-select: none;
    }
    b {
      user-select: none;
    }
  }

  button {
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid #181c25;
    background: #232936;
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
  }

  ::-webkit-scrollbar-track {
    background: #181c25;
    box-shadow: inset 0 0 5px #12171c;
  }
`
