import React from 'react'
import style from './Botao.module.scss'

class Botao extends React.Component<any, any>{
    // Determinando o tipo do botão
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void

    render() {
        const { type = "button", onClick } = this.props
        // Criando o botão
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao