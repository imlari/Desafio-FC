import Botao from '../Botao'
import style from './Contagem.module.scss'
import Relogio from './Relogio'

export default function Contagem(){
    return(
        <div className={style.contagem}>
            <p className={style.titulo}>Inicie a contagem</p>
            <div className={style.relogio}>
                <Relogio />
            </div>
            <Botao>Iniciar</Botao>
        </div>
    )
}