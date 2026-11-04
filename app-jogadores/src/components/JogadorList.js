import React from "react";
import Jogador from "./Jogador";

function JogadorList(props) {
    return (
        <ul className="list-unstyled">
            {props.jogadorList.map(jogador => (
                <Jogador jogador={jogador} key={jogador.id} aoExcluir={props.aoExcluir} />
            ))}
        </ul>
    )
}

export default JogadorList;