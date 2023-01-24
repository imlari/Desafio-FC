import React, { useState } from "react"
import { IPontos } from "../../types/ponto"
import Botao from "../Botao"
import { v4 as uuidv4 } from 'uuid';
import { InputContainer, NovoPonto } from "./style";

interface Props {
    setPontos: React.Dispatch<React.SetStateAction<IPontos[]>>
}

// Criando função do formulário
function Formulario({ setPontos }: Props) {
    const [nome, setNome] = useState("")
    const [horario, setHorario] = useState("00:00")

    // Criando função que adiciona os registros
    function adicionarRegistro(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setPontos(registrosAntigos => [
            ...registrosAntigos,
            {
                nome,
                horario,
                selecionado: false,
                registrado: false,
                id: uuidv4()
            }])

        setNome("")
        setHorario("00:00")
    }
    // retorna os inputs que estão relacionadaos a adicionar registros ao submeter o registro
    return (
        <NovoPonto onSubmit={adicionarRegistro}>
            <InputContainer>
                <label htmlFor="nome"> Informe o seu nome </label>
                <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(evento) => setNome(evento.target.value)}
                    id="nome"
                    placeholder="digite seu nome"
                    required
                />
            </InputContainer>
            <InputContainer>
                <label htmlFor="horario"> Informe o tempo de descanso </label>
                <input
                    type="time"
                    step="1"
                    name="horario"
                    value={horario}
                    onChange={(evento) => setHorario(evento.target.value)}
                    id="horario"
                    min="00:00"
                    max="23:59"
                    required
                />
            </InputContainer>
            <Botao type="submit"> Adicionar </Botao>
        </NovoPonto>
    )
}

export default Formulario