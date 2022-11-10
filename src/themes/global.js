import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.backgroundColor};
  font-family: sans-serif;
  line-height: 1.4;
  font-size: 20px;
  transition: all 0.25s linear;
}

* {
  box-sizing: border-box;
}

::selection {
  background-color: transparent;
}`;
