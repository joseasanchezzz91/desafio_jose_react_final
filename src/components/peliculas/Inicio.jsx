import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, CardFooter, Button, Table, Spinner } from 'reactstrap';
import { peliculaAsyncAtionGetAll ,peliculaAsyncAtionDelete} from '../../store/modules/peliculas/peliculas.actions';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap'

const Inicio = (props) => {

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(peliculaAsyncAtionGetAll())
        }, []
    );
    const data = useSelector(store => store.peliculas.getAll.data);
const handleDelete=(e)=>{

    let array={
      "id":e.id,
        "titulo":e.titulo,
         "autor":e.autor,
          "descripcion":e.descripcion}

      
    dispatch(peliculaAsyncAtionDelete(e))
    props.history.push("/");
}

    return (
        <Card style={{ width: '100%', height: '100%' }}>
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
            <CardHeader>
                <Link to="/createpeliculas"> <Button style={{ color: 'white' }} color="info"> Agregar </Button> </Link>
            </CardHeader>
            <CardBody>
               
               <h1>Bienvenido!</h1>
                
            </CardBody>
            <CardFooter>
                Esteban, Todos los derechos reservados 2019
        </CardFooter>
        </Card>

    );
}

export default Inicio;