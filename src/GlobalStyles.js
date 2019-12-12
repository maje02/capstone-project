import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    scrollbar-width: none;
}

body {
    margin: 0;
    
}

:root {
    font-family: 'Julius Sans One', sans-serif;
    margin: 0px;
    padding: 0px;
    text-align: center;
    background-color: #DAE1DB;
    height: '100vh';

   
  

}
`
export default GlobalStyles
