import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    /* font-size: 62.5%; */
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
  body {
    font-family: 'suit';
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
