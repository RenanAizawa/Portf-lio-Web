import { Route, Switch } from 'react-router-dom';
import Header from './componets/Header.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={ Home }/>
      </Switch>
    </div>
  );
}

export default App;
