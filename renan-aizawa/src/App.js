import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Header from './componets/Header.jsx';
import Contato from './pages/Contato.jsx';
import Home from './pages/Home.jsx';
import Projetos from './pages/Projetos.jsx';
import Tecnologias from './pages/Tecnologias.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={ Home }/>
        <Route path="/tecnologias" component={ Tecnologias } />
        <Route path="/projetos" component={ Projetos } />
        <Route path="/contato" component={ Contato } />
      </Switch>
    </div>
  );
}

export default App;
