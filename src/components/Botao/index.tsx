import React from "react";
import { Button } from "./style";

// Determinando o tipo das propriedades que serão utilizadas na função
interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

// Criando o botão e passando parâmetros
function Botao({ onClick, type, children }: Props) {
  return (
    
    <Button onClick={onClick} type={type}>
      {children}
    </Button>
  );
}

export default Botao;
