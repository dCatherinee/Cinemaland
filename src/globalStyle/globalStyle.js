import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    @font-face{
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 400;
        src: local('DIN Pro'),
            url('../fonts/dinpro.otf') format('otf');
    }

    @font-face{
        font-family: 'DIN Pro';
        font-style: normal;
        font-weight: 600;
        src: local('DIN Pro'),
            url('../fonts/dinpro_bold.otf') format('otf');
    }

    @font-face{
        font-family: 'DIN Pro';
        font-style: italic;
        font-weight: 400;
        src: local('DIN Pro'),
            url('../fonts/dinpro_italic.otf') format('otf');
    }

    @font-face{
        font-family: 'DIN Pro';
        font-style: italic;
        font-weight: 600;
        src: local('DIN Pro'),
            url('../fonts/dinpro_boldit.otf') format('otf');
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'DIN Pro', 'Roboto', sans-serif;
        background-color: #DDD8D2;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }
`;

export default GlobalStyled;