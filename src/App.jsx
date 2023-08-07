import './App.css';
import {Route} from 'react-router-dom'
import Calculadora from './components/Calculadora/Calculadora';
import Integrantes from './components/Integrantes/Integrantes';
import Proyecto from './components/Proyecto/Proyecto';
import Tecnologias from './components/Tecnologias/Tecnologias';
function App() {
  return (
    <div className="App">
        <Route exact path="/" render={() => <Calculadora/> }/>
        <Route exact path="/integrantes" render={() => <Integrantes/> }/>
        <Route exact path="/proyecto" render={() => <Proyecto/> }/>
        <Route exact path="/about" render={() => <Tecnologias/> }/>
    </div>
  );
}

export default App;
