import { IPontos } from '../../../types/ponto'
import style from './Item.module.scss'
import { Registrado } from './style'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Botao from '../../Botao'

//Definindo as propriedades que existirão no item
interface Props extends IPontos {
    selecionaPonto: (pontoSelecionado: IPontos) => void
}

// Passando como parâmetro para os itens o nome e horário, sendo também determinado se está selecionado, registrado e o seu id ao ser clicado
export default function Item({ nome, horario, selecionado, registrado, id, selecionaPonto }: Props) {

    const [api, setApi] = useState<IPontos[]>([])
      
      /*apidata?.map ( item => {
        console.log('item completo:', item);
        console.log('id:', item.id)
        console.log('nome:', item.nome);
        console.log('horario:', item.horario);
      })*/

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${registrado ? style.itemRegistrado : ''}`}
            onClick={() => !registrado && selecionaPonto({
                nome,
                horario,
                selecionado,
                registrado,
                id
            })}
        >
            <h3>{nome}</h3>
            <span>{horario}</span>
            {registrado && <Registrado aria-label="item completado"></Registrado>}
        </li>
    )
}
