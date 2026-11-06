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

    const editarJogador = (jogador) => {
        props.setJogadorId(jogador.id);
        props.setJogadorNome(jogador.nome);
        props.setJogadorIdade(jogador.idade);
        props.setJogadorTime(jogador.time);
        props.setJogadorNumeroCamisa(jogador.numero_camisa);
        props.setTextoBotao('Atualizar');
    }

    return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <span className="fw-bold">
            {props.jogador.nome} - {props.jogador.idade} - {props.jogador.time} - {props.jogador.numero_camisa}
        </span>
        <div>
            <button onClick={() => editarJogador(props.jogador)} className='btn btn-sm'>
                <span className="badge rounded-pill bg-info">editar</span>
            </button>
            <button onClick={() => excluirJogador(props.jogador.id)} className='btn btn-sm'>
                <span className="badge rounded-pill bg-danger">x</span>
            </button>
        </div>
    </li>
    )
}

export default Jogador;