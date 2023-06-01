import { createGlobalStyle } from 'styled-components';
// import appBg from '../img/app-bg.jpg';

export const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-image: url("../img/app-bg.jpg");
        background-position: center;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol {
        margin: 0;
        padding: 0;
    }

    ul,
    ol {
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;
