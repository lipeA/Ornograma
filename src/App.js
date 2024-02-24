
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/banner';
import Formulario from './components/formulario';

function App() {

  const [novoPokemon, setNovoPokemon] = useState([])

  function aoNovoPokemon(pokemon) {
    console.log(pokemon);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoNovoPokemon={pokemon => aoNovoPokemon(pokemon)} />
    </div>
  );
}

export default App;
