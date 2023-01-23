import { tempoParaMinutos } from '../../common/utils/time'
import { IPontos } from '../../types/ponto'
import Botao from '../Botao'
import style from './Contagem.module.scss'
import Relogio from './Relogio'
import { useState, useEffect } from "react"

interface Props {
    selecionado: IPontos | undefined
}

export default function Contagem({ selecionado }: Props) {
    const [horario, setHorario] = useState<number>()
    useEffect(() => {
        if (selecionado?.horario) {
            setHorario(tempoParaMinutos(selecionado.horario))
        }
    }, [selecionado])

    function temporizador(contador: number = 0) {

    }

    return (
        <div className={style.contagem}>
            <p className={style.titulo}>Inicie a contagem</p>
            <div className={style.relogio}>
                <Relogio horario={horario} />
            </div>
            <Botao onClick={() => console.log("testando")}>Iniciar</Botao>
        </div>
    )
}