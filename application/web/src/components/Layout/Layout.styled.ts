import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
`

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

    #root {
        background: ${({ theme }) => theme.palette.background.default};
    }
`

export default { Container, GlobalStyle }