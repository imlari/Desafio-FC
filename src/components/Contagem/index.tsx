import { tempoParaMinutos } from '../../common/utils/time'
import { IPontos } from '../../types/ponto'
import Botao from '../Botao'
import style from './Contagem.module.scss'
import Relogio from './Relogio'
import { useState, useEffect } from "react"

// Determina as propriedades de quem vai fazer interação com a função de contagem
interface Props {
    selecionado: IPontos | undefined
    registraPonto: () => void
}

// Interação com o contador
export default function Contagem({ selecionado, registraPonto }: Props) {
    const [horario, setHorario] = useState<number>()
    useEffect(() => {
        if (selecionado?.horario) {
            setHorario(tempoParaMinutos(selecionado.horario))
        }
    }, [selecionado])

    // Função que realiza a contagem regressiva
    function temporizador(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setHorario(contador - 1)
                return(temporizador(contador - 1))
            } 
            registraPonto()
        }, 60000)
    }

// Retornando o bloco de contagem
    return (
        <div className={style.contagem}>
            <p className={style.titulo}>Inicie a contagem</p>
            <div className={style.relogio}>
                <Relogio horario={horario} />
            </div>
            <Botao onClick={() => temporizador(horario)}>Iniciar</Botao>
        </div>
    )
}