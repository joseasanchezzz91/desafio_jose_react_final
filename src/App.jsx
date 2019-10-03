import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Home from './components/peliculas/Home';
import FormCreate from './components/peliculas/FormCreate';
import FormEdit from './components/peliculas/FormEdit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './views/login/Login';
import RoutePrivate from './components/route-private/RoutePrivate';
import Inicio from './components/peliculas/Inicio';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      
          <Route path="/" exact  component={Login} />
    
        <Switch>
          <RoutePrivate path="/inicio" exact  component={Inicio} />
          <RoutePrivate path="/peliculas" exact component={Home} />
          <RoutePrivate path="/home/users" exact />
          <RoutePrivate path="/createpeliculas" exact component={FormCreate} />
          <RoutePrivate path="/editpeliculas"  exact component={FormEdit} />
        </Switch>
    </Router>
      </Provider>

    </div>
  );
}

export default App;
