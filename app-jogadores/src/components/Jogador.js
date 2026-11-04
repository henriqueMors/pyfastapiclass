import React from "react";
import axios from "axios";

function Jogador(props) {
    const excluirJogador = (jogadorId) => {
        axios.delete(`http://127.0.0.1:8000/jogadores/${jogadorId}`)
            .then(() => {
                props.aoExcluir(jogadorId)
                alert('Jogador removido com sucesso')
            })
            .catch(error => console.log(error))
    }

    return (
        <li className="mb-2">
            <span className="fw-bold">
                {props.jogador.nome} - {props.jogador.idade} - {props.jogador.time} - {props.jogador.numero_camisa}
            </span>
            <button
                onClick={() => excluirJogador(props.jogador.id)}
                className="btn btn-danger btn-sm ms-2"
            >
                x
            </button>
        </li>
    )
}

export default Jogador;