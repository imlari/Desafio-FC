import style from './Relogio.module.scss'

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
            <span className={style.relogioNumero}>{horaDezena}</span>
            <span className={style.relogioNumero}>{horaUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
        </>
    )
}