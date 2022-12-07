import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
    :root{
        --primary-color: #46AD79;
        --primary-font: 'Montserrat', sans-serif;
        --nav-background-color: #dbe7f9;
    }
    body{
        background: #f2f6fc;
    }
`;

export default GlobalStyle;
