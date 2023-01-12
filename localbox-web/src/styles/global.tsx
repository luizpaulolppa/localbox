import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 16px Poppins, sans-serif;
  }

  html, body, #root {
    margin: 0 auto;
    height: 100%;
    background-color: white;
    /* background-color: #eeeeef; */
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  .noselect, table {
    cursor: default;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`
