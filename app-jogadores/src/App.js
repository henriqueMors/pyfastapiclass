import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import JogadorList from './components/JogadorList';

function App() {

  const [jogadorList, setJogadorList] = useState([{}]);
  const [jogadorNome, setJogadorNome] = useState('');
  const [jogadorIdade, setJogadorIdade] = useState('');
  const [jogadorTime, setJogadorTime] = useState('');
  const [jogadorNumeroCamisa, setJogadorNumeroCamisa] = useState('');
  const [jogadorId, setJogadorId] = useState('');
  const removerDaLista = (jogadorId) => { setJogadorList(lista => lista.filter(jogador => jogador.id !== jogadorId))}
  const [textoBotao, setTextoBotao] = useState('Cadastrar');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/jogadores')
      .then(resposta => {
        setJogadorList(resposta.data)
      })
      .catch(error => console.log(error))
  }, []);     

  const limparFormulario = () => {
    setJogadorId('')
    setJogadorNome('')
    setJogadorIdade('')
    setJogadorTime('')
    setJogadorNumeroCamisa('')
  }

  const adicionaJogador = (jogador) => {
    axios.post('http://127.0.0.1:8000/jogadores', jogador)
      .then(resposta => {
        setJogadorList(lista => [...lista, resposta.data])
        limparFormulario()
        setTimeout(() => alert('Jogador cadastrado: ' + resposta.data.nome), 100)
      })
      .catch(error => console.log(error))
  }

  const atualizaJogador = (jogador) => {
    axios.put(`http://127.0.0.1:8000/jogadores/${jogadorId}`, jogador)
      .then(resposta => {
        setJogadorList(lista => lista.map(j => j.id === resposta.data.id ? resposta.data : j))
        limparFormulario()
        setTimeout(() => alert('Jogador atualizado: ' + resposta.data.nome), 100)
      })
      .catch(error => console.log(error))
  }

  const adicionaAtualizaJogador = () => {
    const jogador = {
      'nome': String(jogadorNome),
      'idade': parseInt(jogadorIdade),
      'time': String(jogadorTime),
      'numero_camisa': parseInt(jogadorNumeroCamisa)
    }
    if (jogadorId !== '') {
      atualizaJogador(jogador)
    } else {
      adicionaJogador(jogador)
    }
  }

  return (
    <div className='container'>
      <div 
      className='mt-3 justify-content-center align-items-center mx-auto'
      style={{'width':'40vw', 'backgroundColor':'#ffffff'}}>
        <h2 className='text-center text-white bg-success card mb-1'>
          Gerenciamentro de Jogadores
        </h2>
        <h6 className='card text-center text-white bg-success card mb-1 pb-1'>
          Informações de Jogador
        </h6>
        <div className='card-body text-center'>
          <h5 className='card text-center text-white bg-dark pb-1'>
            Cadastro Jogador
          </h5>
          <span className='card-text'>
            <input 
              onChange = { evento => setJogadorNome(evento.target.value) }
              value={jogadorNome}
              className='mb-2 form-control' placeholder='Nome'/>
            <input 
              onChange = { evento => setJogadorIdade(evento.target.value) }
              value={jogadorIdade}
              className='mb-2 form-control' placeholder='Idade'/>
            <input 
              onChange = { evento => setJogadorTime(evento.target.value) }
              value={jogadorTime}
              className='mb-2 form-control' placeholder='Time'/>
            <input 
              onChange = { evento => setJogadorNumeroCamisa(evento.target.value) }
              value={jogadorNumeroCamisa}
              className='mb-2 form-control' placeholder='Número da camisa'/>
            <button 
              onClick = { adicionaAtualizaJogador }
              className='btn btn-outline-success mb-2 pb-1'>
              {textoBotao}
            </button>
          </span>
          <h5 className='card text-center text-white bg-dark pb-1'>
            Lista de Jogadores
          </h5>
          <div className='card-body text-center'>
            <JogadorList 
              jogadorList={jogadorList}
              setJogadorId={setJogadorId}
              setJogadorNome={setJogadorNome}
              setJogadorIdade={setJogadorIdade}
              setJogadorTime={setJogadorTime}
              setJogadorNumeroCamisa={setJogadorNumeroCamisa}
              aoExcluir={removerDaLista}
              setTextoBotao={setTextoBotao} />
          </div>
        </div>
        <h6 className='card text-center text-white bg-success card mb-1 pb-1'>
          &copy; TI SEP - 2026
        </h6>
      </div>
    </div>
  );
}

export default App;