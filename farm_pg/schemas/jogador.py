from pydantic import BaseModel, ConfigDict


class JogadorEntrada(BaseModel):            # o que a API RECEBE
    nome: str
    idade: int
    time: str


class JogadorSaida(JogadorEntrada):         # o que a API DEVOLVE (com id)
    model_config = ConfigDict(from_attributes=True)   # aceita o objeto do banco direto
    id: int
