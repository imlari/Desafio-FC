import React, { useState } from 'react';
import Formulario from '../../components/Formulario';
import Lista from '../../components/Lista';
import Contagem from '../../components/Contagem';
import { IPontos } from '../../types/ponto';
import { AppStyle } from './style';

// Função onde se encontra o formulário, lista e contagem
function App() {
  const [pontos, setPontos] = useState<IPontos[]>([])
  const [selecionado, setSelecionado] = useState<IPontos>()
  // Criando a função que seleciona os pontos e relaciona com o ponto que foi selecionado
  function selecionaPonto(pontoSelecionado: IPontos) {
    setSelecionado(pontoSelecionado)
    setPontos(pontosAnteriores => pontosAnteriores.map(ponto => ({
      ...ponto,
      selecionado: ponto.id === pontoSelecionado.id ? true : false
    })))
  }

  // Funcão que é chamada quando o tempo de um registro finaliza, dando o ponto como concluído
  function registraPonto() {
    if (selecionado) {
      setSelecionado(undefined)
      setPontos(pontosAnteriores =>
        pontosAnteriores.map(ponto => {
          if (ponto.id === selecionado.id) {
            return {
              ...ponto,
              selecionado: false,
              registrado: true
            }
          }
          return ponto
        }
        )
      )
    }
  }

  return (
    <AppStyle>
      <Formulario setPontos={setPontos} />
      <Lista pontos={pontos} selecionaPonto={selecionaPonto} />
      <Contagem selecionado={selecionado} registraPonto={registraPonto} />
    </AppStyle>
  );
}

export default App;
