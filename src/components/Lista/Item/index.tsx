import style from  '../Lista.module.scss'

export default function Item({nome, horario}: {nome:String, horario:String}) {
    return (
        <li className={style.item}>
            <h3>{nome}</h3>
            <span>{horario}</span>
        </li>
    )
}
