import React, { useState } from 'react';
import Formulario from '../../components/Formulario';
import Lista from '../../components/Lista';
import style from './style.module.scss'
import Contagem from '../../components/Contagem';
import { IPontos } from '../../types/ponto';
 
// Função onde se encontra o formulário, lista e contagem
function App() {
  const [pontos, setPontos] = useState<IPontos[]>([])
  const [selecionado, setSelecionado] = useState<IPontos>()
// Criando a função que seleciona os pontos e relaciona com o ponto que foi selecionado
  function selecionaPonto (pontoSelecionado: IPontos)
  {
    setSelecionado(pontoSelecionado)
    setPontos(pontosAnteriores => pontosAnteriores.map(ponto => ({
      ...ponto, 
      selecionado: ponto.id === pontoSelecionado.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setPontos={setPontos} />
      <Lista pontos={pontos} selecionaPonto={selecionaPonto}/>
      <Contagem selecionado={selecionado}/>
    </div>
  );
}

export default App;
