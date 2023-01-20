import React from "react"
import Item from "./Item"
import style from './Lista.module.scss'

function Lista() {

    const pontos = [{
        nome: "Larissa",
        horario: "07:55:23",
    },
    {
        nome: "Letícia",
        horario: "07:57:43"
    }]

    return (
        <aside className={style.listaPontos}>
            <h2>Registro de Pontos</h2>
            <ul>
                {pontos.map((ponto, index) => (
                    <Item {...ponto} key={index} />
                ))}
            </ul>
        </aside>
    )
}

export default Lista