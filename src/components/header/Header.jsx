import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { logoutActionCreator } from '../../store/modules/auth/login.actions';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { FaPowerOff} from 'react-icons/fa';

const Header = (props) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const logout = () => {
        dispatch(logoutActionCreator());
        props.history.push('/')
      
      }
    return (
      <div className="mb-4">
    
        <Navbar className="navbar-dark bg-dark"  expand="md" style={{color:"#ffff"}}>
          <NavbarBrand href="/inicio/bienvenido">Proyecto React G8</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto bla" navbar>
              <NavItem>
              <NavLink tag={RRNavLink} exact to="/inicio/peliculas" activeClassName="active">Lista Peliculas</NavLink>
              </NavItem>
              <NavItem>
              {/* <NavLink tag={RRNavLink} exact to="/dashboard/users" activeClassName="active">Listado de usuarios</NavLink> */}
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>    
                  <DropdownItem onClick={logout}>
                  <FaPowerOff/> Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }

  export default Header;