import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Ex.: postgresql+psycopg://postgres:SUA_SENHA@localhost:5432/farm
# A senha fica no .env / variável de ambiente, nunca no código.
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///farm.db")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()


def get_session():
    """Abre uma sessão por requisição e fecha no final (o FastAPI chama sozinho)."""
    with SessionLocal() as session:
        yield session
