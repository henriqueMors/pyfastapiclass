import React from "react";
import Jogador from "./Jogador";

function JogadorList(props) {
    return (
        <ul className="list-unstyled">
            {props.jogadorList.map(jogador => (
                <Jogador jogador={jogador} key={jogador.id} 
                setJogadorId={props.setJogadorId}
                setJogadorNome={props.setJogadorNome}
                setJogadorIdade={props.setJogadorIdade}
                setJogadorTime={props.setJogadorTime}
                setJogadorNumeroCamisa={props.setJogadorNumeroCamisa}
                aoExcluir={props.aoExcluir}
                setTextoBotao={props.setTextoBotao} />
            ))}
        </ul>
    )
}

export default JogadorList;