import { RelogioDivisao, RelogioNumero } from './style'

interface Props {
    horario: number | undefined
}

export default function Relogio({horario = 0} : Props){

    // Determinando horas e minutos, lembrando que o horário está em minutos
    const horas = Math.floor(horario/60)
    const minutos = Math.floor(horario % 60)
    
    // Determinando quantas unidades estarão nos blocos do relógio, neste caso serão 2
    const [horaDezena, horaUnidade] = String(horas).padStart(2,'0')
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2,'0')
    
    // Retornando o relógio
    return (
        <>
            <RelogioNumero>{horaDezena}</RelogioNumero>
            <RelogioNumero>{horaUnidade}</RelogioNumero>
            <RelogioDivisao>:</RelogioDivisao>
            <RelogioNumero>{minutoDezena}</RelogioNumero>
            <RelogioNumero>{minutoUnidade}</RelogioNumero>
        </>
    )
}