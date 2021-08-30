import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Tahoma, Helvetica, sans-serif;
    font-size: 14px;
    color: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  input, select {
    outline: none;
  }
`
