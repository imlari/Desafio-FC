import styled from "styled-components";

export const NovoPonto = styled.form`
    display:flex;
    flex-direction: column;
    grid-area: novo-ponto;
    color: #32CD32;
    background-color: #f2f2f2;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 2.25rem;
        padding: 24px;
        box-sizing: border-box;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;

  label {
    margin-bottom: 8px;
    font-size: 1rem;
  }

  input {
    width: 100%;
    padding: 8px 12px 4px;
    box-sizing: border-box;
    border: unset;
    border-radius: 5px;
    background-color: #f2f2f2;
    box-shadow: 0px 2px 4px #2d2b2b9f inset;

    &::placeholder {
      color: #bfbfbf;
    }
  }

  @media screen and (min-width: 1280px) {
    width: calc(60% - 12px);
    &:last-of-type {
      width: 40%;
    }
    label {
      font-size: 1.25rem;
    }
    input {
      height: 100%;
      font-size: 1.25rem;
    }
  }
`;
