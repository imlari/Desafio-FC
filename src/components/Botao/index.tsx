import React from 'react'
import style from './Botao.module.scss'

// Determinando o tipo das propriedades que serão utilizadas na função
interface Props {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    children?: React.ReactNode
}

// Criando o botão e passando parâmetros
function Botao({onClick, type, children} : Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}

export default Botao