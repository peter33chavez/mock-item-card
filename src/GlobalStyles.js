import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    :root{
        --primary-color: #46AD79;
        --primary-font: 'Montserrat', sans-serif;;
    }
`;

export default GlobalStyle;
