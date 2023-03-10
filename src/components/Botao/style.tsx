import styled from "styled-components";

export const Button = styled.button`
    align-self: center;
    background-color: #00B234;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    color: #f2f2f2;
    cursor: pointer;
    font-size: 0.75rem;
    padding: 15px;
    width: 100px;

    &:active {
        background-color: #00B234;
        box-shadow: 2px 2px 4px #0000009F inset;
    }

      @media screen and (min-width: 1280px) {
        .botao {
          grid-column-start: span 2;
          justify-self: center;
          width: 150px;
          font-size: 1.25rem;
        }
`;
