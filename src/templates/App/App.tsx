import Formulario from '../../components/Formulario';
import Lista from '../../components/Lista';
import style from './style.module.scss'
import Contagem from '../../components/Contagem';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Contagem />
    </div>
  );
}

export default App;
