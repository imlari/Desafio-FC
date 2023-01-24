import React from "react"
import { IPontos } from "../../types/ponto"
import Botao from "../Botao"
import style from "./Formulario.module.scss"
import { v4 as uuidv4 } from 'uuid'; 

class Formulario extends React.Component<{
    setPontos: React.Dispatch<React.SetStateAction<IPontos[]>>
}>
{
    // Determinando o estado inicial dos inputs
    state = {
        nome: "",
        horario: "00:00"
    }

    // Função que guarda os registros que estão sendo criados com os anteriores, fazendo com que não sumam
    adicionarRegistro(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setPontos(registrosAntigos => [
            ...registrosAntigos,
            {
                ...this.state,
                selecionado: false,
                registrado: false,
                id:uuidv4()
            }])
        this.setState({
            nome: "",
            horario: "00:00"
        })
    }

    render() {

        // retorna os inputs que estão relacionadaos a adicionar registros ao submeter o registro
        return (
            <form className={style.novoPonto} onSubmit={this.adicionarRegistro.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="nome">
                        Informe o seu nome
                    </label>
                    <input
                        type="text"
                        name="nome"
                        value={this.state.nome}
                        onChange={evento => this.setState({ ...this.state, nome: evento.target.value })}
                        id="nome"
                        placeholder="digite seu nome"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="horario">
                        Informe o tempo de descanso
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="horario"
                        value={this.state.horario}
                        onChange={evento => this.setState({ ...this.state, horario: evento.target.value })}
                        id="horario"
                        min="00:00:00"
                        max="23:59:59"
                        required
                    />
                </div>
                <Botao type="submit"> Adicionar </Botao>
            </form>
        )
    }
}

export default Formulario