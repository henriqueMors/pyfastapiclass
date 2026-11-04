import logo from './logo.svg';
import './App.css';

function App() {
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
            <input className='mb-2 form-control' placeholder='Nome'/>
            <input className='mb-2 form-control' placeholder='Idade'/>
            <input className='mb-2 form-control' placeholder='Time'/>
            <input className='mb-2 form-control' placeholder='Número da camisa'/>
            <button className='btn btn-outline-success mb4 pb-1'>
              Cadastrar
            </button>
          </span>
          <h5 className='card text-center text-white bg-dark pb-1'>
            Lista de Jogadores
          </h5>
        </div>
        <h6 className='card text-center text-white bg-success card mb-1 pb-1'>
          &copy; TI SEP - 2026
        </h6>
      </div>
    </div>
  );
}

export default App;
