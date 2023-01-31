import { tempoParaMinutos } from "../../common/utils/time";
import { IPontos } from "../../types/ponto";
import Relogio from "./Relogio";
import { useState, useEffect } from "react";
import { Button, Count, Timer, Title } from "./style";

// Determina as propriedades de quem vai fazer interação com a função de contagem
interface Props {
  selecionado: IPontos | undefined;
  registraPonto: () => void;
}

// Interação com o contador
export default function Contagem({ selecionado, registraPonto }: Props) {
  const [horario, setHorario] = useState<number>();
  useEffect(() => {
    if (selecionado?.horario) {
      setHorario(tempoParaMinutos(selecionado.horario));
    }
  }, [selecionado]);

  // Função que realiza a contagem regressiva
  function temporizador(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setHorario(contador - 1);
        return temporizador(contador - 1);
      }
      registraPonto();
    }, 60000);
  }

  // Retornando o bloco de contagem
  return (
    <Count>
      <Title>Inicie a contagem</Title>
      <Timer>
        <Relogio horario={horario} />
      </Timer>
      <Button onClick={() => temporizador(horario)}>Iniciar</Button>
    </Count>
  );
}
