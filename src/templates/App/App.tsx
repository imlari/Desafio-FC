import React, { useState } from 'react';
import Formulario from '../../components/Formulario';
import Lista from '../../components/Lista';
import style from './style.module.scss'
import Contagem from '../../components/Contagem';
import { IPontos } from '../../types/ponto';

function App() {

  const [pontos, setPontos] = useState<IPontos[]>([])
  const [selecionado, setSelecionado] = useState<IPontos>()

  function selecionaPonto (pontoSelecionado: IPontos){
    setSelecionado(pontoSelecionado)
    setPontos(pontosAnteriores => pontosAnteriores.map(ponto => ({...ponto, selecionado: ponto.id === pontoSelecionado.id ? true : false})))
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
