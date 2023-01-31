import styled from "styled-components";
import checkmark from "../../../assets/img/check-mark.svg";

export const Registrado = styled.span`
  display: block;
  background-image: url(${checkmark});
  background-repeat: no-repeat;
  background-size: 38px 38px;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 42px;
  height: 43px;
`;

export const Item = styled.li`
  background-color: #f2f2f2;
  color: #32cd32;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009f;
  padding: 8px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;

  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: #d0d0d0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.25rem;
  }
`;
