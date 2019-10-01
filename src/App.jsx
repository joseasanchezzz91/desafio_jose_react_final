import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Home from './components/peliculas/Home';
import FormCreate from './components/peliculas/FormCreate';
import FormEdit from './components/peliculas/FormEdit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Navbar className="navbar-dark bg-dark"  expand="md" style={{color:"#ffff"}}>
          <NavbarBrand href="/">Proyecto React</NavbarBrand>
          <NavbarToggler /> {/*onClick={this.toggle}*/}
          <Collapse  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/peliculas/">Peliculas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="users">Users</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
         
          <Route path="/peliculas" component={Home} />
          <Route path="/users" />
          <Route path="/createpeliculas"  component={FormCreate} />
          <Route path="/editpeliculas"  component={FormEdit} />
        </Switch>
    </Router>
      </Provider>

    </div>
  );
}

export default App;
