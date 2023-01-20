import React from "react"
import Botao from "../Botao"
import style from "./Formulario.module.scss"

function Formulario (){

    state = { 
        nome: "" ,
        horario: "00:00"
    }
    return(
        <form className={style.novoPonto}>
            <div className={style.inputContainer}>
                <label htmlFor="nome">
                    Informe o seu nome
                </label>
                <input
                type="text"
                name="nome"
                id="nome"
                placeholder="digite seu nome"
                required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="horario">
                    Informe o horário de chegada
                </label>
                <input
                type="time"
                step="1"
                name="horario"
                value={this.state.horario}
                id="horario"
                min="00:00:00"
                max="23:59:59"
                required
                />
            </div>
            <Botao> Adicionar </Botao>
        </form>
    )
}

export default Formulario