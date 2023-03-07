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

  html {
    margin: 0;
    box-sizing: border-box;
    font-family: 'roketregular';
    overflow-x: hidden;
  }
  body {
    font-family: 'roketregular';
    font-weight: 500;
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
`
