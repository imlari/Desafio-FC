import axios from "axios"
import { useEffect, useState } from "react"
import { IPontos } from "../../types/ponto"
import Item from "./Item"
import { ListaPontos } from "./style"

// Determinando as propriedades que existirão na lista
interface Props {
    pontos: IPontos[],
    selecionaPonto: (pontoSelecionado: IPontos) => void
}

function Lista({pontos, selecionaPonto} : Props) {
// Retorna a lista dos pontos que já foram adicionados

    return (
        <ListaPontos>
            <h2>Registros</h2>
            <ul>
                {pontos.map((ponto) => (
                    <Item {...ponto} key={ponto.id} selecionaPonto={selecionaPonto}/>
                ))}
            </ul>
        </ListaPontos>
    )
}

export default Lista