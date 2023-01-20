import React, { useState } from "react"
import Item from "./Item"
import style from './Lista.module.scss'

function Lista() {

    const [pontos, setPontos] = useState ([{
        nome: "Larissa",
        horario: "07:55:23",
    },
    {
        nome: "Letícia",
        horario: "07:57:43"
    }]) 

    return (
        <aside className={style.listaPontos}>
            <h2 onClick={() => { 
                console.log("verificando comportamento", pontos) 
                setPontos([...pontos, {nome:"Patrícia", horario:"08:00:00"}])}}>Registro de Pontos</h2>
            <ul>
                {pontos.map((ponto, index) => (
                    <Item {...ponto} key={index} />
                ))}
            </ul>
        </aside>
    )
}

export default Lista