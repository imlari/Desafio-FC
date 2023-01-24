import { IPontos } from '../../../types/ponto'
import style from  './Item.module.scss'

//Definindo as propriedades que existirão no item
interface Props extends IPontos {
    selecionaPonto: (pontoSelecionado: IPontos) => void
}

// Passando como parâmetro para os itens o nome e horário, sendo também determinado se está selecionado, registrado e o seu id ao ser clicado
export default function Item({nome, horario, selecionado, registrado, id, selecionaPonto}: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${registrado ? style.itemRegistrado : ''}`} 
            onClick={() => !registrado && selecionaPonto ({
            nome,
            horario,
            selecionado,
            registrado,
            id
        })}
        >
            <h3>{nome}</h3>
            <span>{horario}</span>
            {registrado && <span className={style.registrado} aria-label="item completado"></span>}
        </li>
    )
}
