/* eslint-disable react/react-in-jsx-scope */

import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Aurinko from './components/Aurinko';
import Selitysta from './components/Selitysta';
import EiOle from './components/EiOle';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sunshine" component={Aurinko} />
        <Route path="/selitysta" component={Selitysta} />
        <Route component={EiOle} />
      </Switch>
    </>
  );
}

export default App;
