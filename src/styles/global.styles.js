import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: ${props => props.theme.bodyFont};
        font-weight: 400;
        color: ${props => props.theme.primaryBlack};
    }

    ul {
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6, a {
        font-weight: 600;
        font-family: ${props => props.theme.headingFont};
    }

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .Alert-dialog {
        a {
            font-family: ${props => props.theme.bodyFont};
            color: ${props => props.theme.primaryColor};
        }

        
        .MuiDialog-paperWidthSm {
            max-width: 400px;
        }

        .MuiBackdrop-root {
            background-color: rgba(0, 0, 0, 0.8);
        }

        .MuiTypography-h6 {
            font-size: 2.4rem;
            font-family: ${props => props.theme.headingFont};
            font-weight: 600;
            line-height: 1.6;
            letter-spacing: 0.0075em;
        }

        .MuiDialogTitle-root {
            padding-bottom: 0;
        }

        .MuiTypography-body1 {
            font-size: 1.5rem;
            font-family: ${props => props.theme.bodyFont};
        }

        .MuiButton-root {
            font-size: 1.2rem;
        }

        .MuiButton-textPrimary:hover {
            background-color: ${props => props.theme.hoverBG};
        }

        .MuiButton-text {
            padding: 6px 10px 5px;
        }
    }
`