from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from config.database import get_session
from models.jogador import JogadorBD
from schemas.jogador import JogadorEntrada, JogadorSaida

jogador_router = APIRouter()


def buscar_ou_404(session: Session, jogador_id: int) -> JogadorBD:
    jogador = session.get(JogadorBD, jogador_id)
    if jogador is None:
        raise HTTPException(status_code=404, detail="Jogador não encontrado")
    return jogador


@jogador_router.get("/jogadores", response_model=list[JogadorSaida])
def lista_jogadores(session: Session = Depends(get_session)):
    return session.query(JogadorBD).all()


@jogador_router.get("/jogadores/{jogador_id}", response_model=JogadorSaida)
def busca_jogador(jogador_id: int, session: Session = Depends(get_session)):
    return buscar_ou_404(session, jogador_id)


@jogador_router.post("/jogadores", response_model=JogadorSaida, status_code=201)
def cadastra_jogador(jogador: JogadorEntrada, session: Session = Depends(get_session)):
    novo = JogadorBD(**jogador.model_dump())
    session.add(novo)
    session.commit()
    session.refresh(novo)                   # traz o id gerado pelo banco
    return novo


@jogador_router.put("/jogadores/{jogador_id}", response_model=JogadorSaida)
def atualiza_jogador(jogador_id: int, dados: JogadorEntrada, session: Session = Depends(get_session)):
    jogador = buscar_ou_404(session, jogador_id)
    for campo, valor in dados.model_dump().items():
        setattr(jogador, campo, valor)
    session.commit()
    session.refresh(jogador)
    return jogador


@jogador_router.delete("/jogadores/{jogador_id}", status_code=204)
def exclui_jogador(jogador_id: int, session: Session = Depends(get_session)):
    jogador = buscar_ou_404(session, jogador_id)
    session.delete(jogador)
    session.commit()
