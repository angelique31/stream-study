import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
   
}

body {
  font-family: "Roboto", sans-serif;
  background-color: red;
}

`;

export default GlobalStyles;
