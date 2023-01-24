import styled from "styled-components"

export const AppStyle = styled.div`
    display: grid;
    grid-template-rows: min-content min-content auto;
    grid-template-areas: 
    "novo-ponto"
    "contagem"
    "pontos"
    ;
    row-gap: 24px;
    min-width: 320px;
    min-height: calc(100vh - 32px);
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #e1313b;
  
    @media screen and (min-width:1280px)  {
      grid-template-areas: 
      "novo-ponto pontos"
      "contagem pontos"
      ;
      column-gap: 64px;
      grid-template-rows: min-content min-content;
      grid-template-columns: 750px 300px;
      justify-content: center;
      align-content: center;
      padding: 64px;
    }
`