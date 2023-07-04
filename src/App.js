import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [inicialText, setInicialText] = useState("Quer alterar texto? Clique no botão...");
  const [booleanValue, setBooleanValue] = useState(true);



  const changeValueOnClick = () => {
    if (booleanValue === true) {
      setBooleanValue(false);
      setInicialText('Mudou o texto (false), parabens. Clique novamente para voltar...')
    } else {
      setBooleanValue(true)
      setInicialText('Voltou o texto (true). Clique novamente para mudar...')
    }

  }

  const buttonClassName = booleanValue ? 'blue-button' : 'red-button';
  return (
    <div className="App">
      <button className={buttonClassName} onClick={changeValueOnClick}>MUDAR O TEXTO</button>
      <p>{inicialText}</p>
    </div>
  )


}

export default App;
