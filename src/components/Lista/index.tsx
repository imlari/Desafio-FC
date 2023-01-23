import { IPontos } from "../../types/ponto"
import Item from "./Item"
import style from './Lista.module.scss'

interface Props {
    pontos: IPontos[],
    selecionaPonto: (pontoSelecionado: IPontos) => void
}

function Lista({pontos, selecionaPonto} : Props) {

    return (
        <aside className={style.listaPontos}>
            <h2>Registro de Descanso</h2>
            <ul>
                {pontos.map((ponto, index) => (
                    <Item {...ponto} key={ponto.id} selecionaPonto={selecionaPonto}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista