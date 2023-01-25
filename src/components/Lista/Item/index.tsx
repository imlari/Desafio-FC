import { useState, useEffect } from 'react'
import { IPontos } from '../../../types/ponto'
import style from './Item.module.scss'
import { Registrado } from './style'
import axios from 'axios'

//Definindo as propriedades que existirão no item
interface Props extends IPontos {
    selecionaPonto: (pontoSelecionado: IPontos) => void
}

// Passando como parâmetro para os itens o nome e horário, sendo também determinado se está selecionado, registrado e o seu id ao ser clicado
export default function Item({ nome, horario, selecionado, registrado, id, selecionaPonto }: Props) {

    const [apidata, setApidata] = useState<IPontos[]>([])

    useEffect(() => {
        axios.get('https://63d1757ed5f0fa7fbdcbd27f.mockapi.io/users')
            .then(response => { setApidata(response.data) })
            .catch(erro => { console.log("Ocorreu um erro :/", erro) })
    }, [])

    console.log("Console do item", apidata)

            return (
                <>
                {apidata.map((data) => {
                    <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${registrado ? style.itemRegistrado : ''}`}
                    onClick={() => !registrado && selecionaPonto({
                        nome,
                        horario,
                        selecionado,
                        registrado,
                        id
                    })}
                >
                    <h3>{data.nome}</h3>
                    <span>{data.horario}</span>
                    {registrado && <Registrado aria-label="item completado"></Registrado>}
                </li>
                })
            }
                </>     
            )    
}
