import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Home from './components/peliculas/Home';
import FormCreate from './components/peliculas/FormCreate';
import FormEdit from './components/peliculas/FormEdit';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './views/login/Login';
import RoutePrivate from './components/route-private/RoutePrivate';
import Inicio from './components/peliculas/Inicio';
import Header from './components/header/Header';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      
          <Route path="/" exact  component={Login} />
    
          <RoutePrivate path="/inicio/"  component={Header} />
          <RoutePrivate path="/inicio/bienvenido" exact  component={Inicio} />
          <RoutePrivate path="/inicio/peliculas" exact component={Home} />
          <RoutePrivate path="/inicio/peliculas/createpeliculas" exact component={FormCreate} />
          <RoutePrivate path="/inicio/peliculas/editpeliculas"  exact component={FormEdit} />
       
    </Router>
      </Provider>

    </div>
  );
}

export default App;
