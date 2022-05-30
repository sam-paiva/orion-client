import 'antd/dist/antd.css';
import 'react-pro-sidebar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&family=Roboto:ital,wght@0,300;1,100&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--black);
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        overflow: auto;
        height: 100%;
        width: 100%;
    }

    button {
        cursor: pointer;
    }

    *, button, input, textarea {
        border: 0;
        background: none;
        font-family: 'Roboto', sans-serif;
        outline: 0;
    }

    html {
        background-color: var(--background);
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --background: #e9edef;
        --primary: #2196F3;
        --outline: #2F3336;
        --grey: #7a7a7a;
        --like: #E8265E;
        --white: #fff;
        --indigo: #9400D3;
        --black: #000;
        --twitter-dark-hover: #011017;
        --toastify-color-dark: #121212;
        --toastify-color-progress-dark: var(--primary); 
    }
`;
