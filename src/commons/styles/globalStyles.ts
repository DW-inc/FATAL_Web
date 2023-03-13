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
    src: url('/font/Bebas/BebasNeue-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Bebas Light';
    src: url('/font/Bebas/Bebas Neue Pro Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Bebas Book';
    src: url('/font/Bebas/Bebas Neue Pro Book.otf') format('opentype');
  }

  @font-face {
    font-family: 'Inter';
    src: url('/font/Inter-Regular.ttf') format('ttf');
  }
  @font-face {
    font-family: 'Randhu';
    src: url('/font/RANDHU.TTF') format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('/font/NotoSans/NotoSansKR-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Nextrue';
    src: url('/font/Nextrue/Nextrue-Extended-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Nextrue Con Regular Slant';
    src: url('/font/Nextrue/Nextrue Condensed Regular Slant.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Nextrue Con Regular';
    src: url('/font/Nextrue/Nextrue Condensed Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Nextrue Con Light';
    src: url('/font/Nextrue/Nextrue Condensed Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Nextrue Con Light Slant';
    src: url('/font/Nextrue/Nextrue Condensed Light Slant.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Nextrue-Slant';
    src: url('/font/Nextrue/Nextrue-Extended-Regular-slant.otf')
      format('opentype');
  }

  @font-face {
    font-family: 'Nextrue-Bold-Slant';
    src: url('/font/Nextrue/Nextrue-Condensed-Bold-Slant.otf')
      format('opentype');
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
    section {
      border: none;
    }
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
    border: none;
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
