import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(135deg, #1a0b2e, #2e1a47); /* Dark purple gradient */
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(173, 123, 255, 0.8);
  }

  a {
    text-decoration: none;
    color: #d4aaff;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #ffffff;
    text-shadow: 0px 0px 15px rgba(212, 170, 255, 1);
  }
`;

export default GlobalStyle;


