from sqlalchemy import Column, Integer, String
from config.database import Base


class JogadorBD(Base):
    __tablename__ = "jogadores"
    id = Column(Integer, primary_key=True)
    nome = Column(String, nullable=False)
    idade = Column(Integer, nullable=False)
    time = Column(String, nullable=False)
    numero_camisa = Column(Integer, nullable=True)