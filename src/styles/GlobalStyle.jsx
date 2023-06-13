import { createGlobalStyle } from 'styled-components';
import appBg from '../img/app-bg.jpg';
import '@fontsource-variable/montserrat';

export const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-image: url(${appBg});
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: "Montserrat";
        font-size: 18px;
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
