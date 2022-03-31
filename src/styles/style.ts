import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'GoogleSans';
    src: local('GoogleSans'), url('/fonts/GoogleSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: block;
  }

  @font-face {
    font-family: 'GoogleSans';
    src: local('GoogleSans'), url('/fonts/GoogleSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: block;
  }

  @font-face {
    font-family: 'GoogleSans';
    src: local('GoogleSans'), url('/fonts/GoogleSans-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: .5s;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input {
    font: inherit;
  }

  button {
    font: inherit;
    border: 0;
    background-color: transparent;
  }

  html {
    font-size: 10px;
  }

  :root {
    --default-bg-color: #ffffff;
    --default-text-color: #000000;
  }

  body {
    height: 100vh;
    font: 1.6rem 'GoogleSans', sans-serif;
    line-height: 2.4rem;
    font-weight: 400;
    color: var(--default-text-color);
    background: var(--default-bg-color);
  }

  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a,
  input,
  button {
    cursor: pointer;
    transition: 0.4s;
  }

  .no-scroll {
    overflow: hidden;
  }

`
