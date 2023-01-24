import styled from "styled-components";

export const ListaPontos = styled.aside`
    grid-area: pontos;
    height: 100%;
    
    h2 {
    font-size: 1.25rem;
    margin-bottom: 10px;
    }

    ul {
    max-height: 350px;
    overflow-y: scroll;
        scrollbar-width: thin;
    }

    @media screen and (min-width:1280px) {
    
    h2{
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    ul {
        overflow: auto;
        max-height: 500px;
    }
`