import { IPontos } from '../../../types/ponto'
import style from  './Item.module.scss'

interface Props extends IPontos {
    selecionaPonto: (pontoSelecionado: IPontos) => void
}

export default function Item({nome, horario, selecionado, registrado, id, selecionaPonto}: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
            onClick={() => selecionaPonto ({
            nome,
            horario,
            selecionado,
            registrado,
            id
        })}
        >
            <h3>{nome}</h3>
            <span>{horario}</span>
        </li>
    )
}
