import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    
    body {
      background-color: ${({ theme }) => theme.backgroundColor};
      font-family: sans-serif;
      line-height: 1.4;
      font-size: 20px;
      transition: all 0.25s linear;
      position: relative;
    }
    
    ::selection {
      background-color: transparent;
    }
`;

export default GlobalStyles;
