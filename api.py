from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def inicio():
    return {"Mensagem": "Olá mundo"}

#uvicorn 5-fast:app --reload