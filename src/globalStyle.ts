import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    color: inherit;
    font-size: 1em;
    font-weight: inherit;
    background-color: transparent;
  }

  :root {
    --bg: #f3f3f3;
    --primary: #57b246;
    --secondary: #3b3b3b;
    --cancel: #fe4b4b;
    --bright: #ffffff;
    --dark: #1b1b1b;
    --tablet-bp: 700px;
    --laptop-bp: 1400px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color: var(--dark);
    font-size: 16px;
    font-weight: normal;
  }

  body {
    background-color: var(--bg);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
