import style from './Contagem.module.scss'
import Relogio from './Relogio'

export default function Contagem(){
    return(
        <div>
            <p>Inicie a contagem</p>
            <div>
                <Relogio />
            </div>
        </div>
    )
}