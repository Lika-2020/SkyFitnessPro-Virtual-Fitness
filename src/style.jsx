import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
* {
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'StratosSkyeng';
    src: local('StratosSkyeng'),
        url('./fonts/Stratos-Regular.woff2') format('font-woff2'),
        url('./fonts/Stratos-Regular.woff') format('font-woff');
    font-weight: 400;
    font-style: normal;
}

`;

export default GlobalStyle;
