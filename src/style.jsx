import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
* {
    margin: 0;
    padding: 0;
}

a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
   
  }
  @font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'),
    url('./fonts/stratos/Stratos-Regular.woff2') format('font-woff2'),
    url('./fonts/stratos/Stratos-Regular.woff2') format('font-woff');
    font-weight: 400;
    font-style: normal;
  }

`;

export default GlobalStyle;
