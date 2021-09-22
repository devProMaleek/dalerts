import { createGlobalStyle } from 'styled-components';

// Exporting the global style.

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}

//Body Style
body {
  margin: 0;
  padding: 0;
  background: #161522;
  height: 100vh;
  //color: #ffffff !important;
  font-family: 'Roboto Condensed', sans-serif !important;
}
`