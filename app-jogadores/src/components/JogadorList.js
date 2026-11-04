import React from "react";
import Jogador from "./components/Jogador";

function JogadorList(props) {
    return (
        <ul className="list-unstyled">
            {props.jogadorList.map(jogador => (
                <Jogador jogador={jogador} key={jogador.id} />
            ))}
        </ul>
    )
}

export default JogadorList;