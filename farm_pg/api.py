from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.database import Base, engine
from routes.jogador import jogador_router

Base.metadata.create_all(engine)            # cria as tabelas que ainda não existem

app = FastAPI(title="CRUD SEP - PostgreSQL")
app.include_router(jogador_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
