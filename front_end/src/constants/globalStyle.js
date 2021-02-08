import { createGlobalStyle } from "styled-components";
import {MEDIA_QUERY_LG, MEDIA_QUERY_XL, MEDIA_QUERY_MD, MEDIA_QUERY_SM, MEDIA_QUERY_XS} from "./breakpoints"

const GlobalStyle = createGlobalStyle`
  html {
    ${MEDIA_QUERY_XL} {
      font-size: 12px;
    }
    ${MEDIA_QUERY_LG} {
      font-size: 12px;
    }
    ${MEDIA_QUERY_MD} {
      font-size: 10px;
    }
    ${MEDIA_QUERY_SM} {
      font-size: 10px;
    }
    ${MEDIA_QUERY_XS} {
      font-size: 10px;
    }
  }

  body {
  }

  * {
    box-sizing: border-box;
    font-family: Helvetica;
  }
  
  a {
    text-decoration: none;
  
    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }

  input {
    outline: none;
  }

  body::after {
    content: "";
    background: #3E3A39;
    mix-blend-mode: screen;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -99;   
  }

  body::before {
    content: "";
    background: transparent linear-gradient(180deg, #F15A24AD 3%, #DC52219E 8%, #8E351566 28%, #511E0C3B 46%, #240E051A 63%, #0A040108 77%, #00000000 87%) 0% 0% no-repeat padding-box;
    mix-blend-mode: screen;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -98;   
  }
`;

export default GlobalStyle;
