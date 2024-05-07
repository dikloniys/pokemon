import { createGlobalStyle } from "styled-components";
import InM from "../Fonts/Inter-Medium.otf";
import InR from "../Fonts/Inter-Regular.otf";
import suisseintl from "../Fonts/suisseintl-regular.otf";
import { baseTheme } from "./baseTheme";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Inter';
      src: url(${InM}) format('truetype');
      font-weight: 500;
    }
  @font-face {
      font-family: 'Inter';
      src: url(${InR}) format('truetype');
      font-weight: 400;
    }
  @font-face {
      font-family: 'Inter';
      src: url(${suisseintl}) format('truetype');
      font-weight: 500;
    }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter';
    font-weight: 400;
    color: ${baseTheme.colors.text};
  }
  body {
    background-color: ${baseTheme.colors.substrate};
  }
  div {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 100;
  }
  img{
    width: 100%;
    height: 100%;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
