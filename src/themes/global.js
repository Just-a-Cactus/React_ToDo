import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html{
      font-size: 20px;
    }
    
    body {
      background-color: ${({ theme }) => theme.backgroundColor};
      font-family: sans-serif;
      line-height: 1.4;
      transition: all 0.25s linear;
      position: relative;
    }
    
    ::selection {
      background-color: transparent;
    }
`;

export default GlobalStyles;
