import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, CardFooter, Button, Table, Spinner } from 'reactstrap';
import { peliculaAsyncAtionGetAll ,peliculaAsyncAtionDelete} from '../../store/modules/peliculas/peliculas.actions';
import { Link } from 'react-router-dom';

const Home = (props) => {

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
            <CardHeader>
                <Link to="/createpeliculas"> <Button style={{ color: 'white' }} color="info"> Agregar </Button> </Link>
            </CardHeader>
            <CardBody>
                <Table dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Descripcion</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {data &&
                        <tbody>
                            {data.map(e => (
                                <tr key={e.id}>
                                    <td >{e.id} </td>
                                    <td>{e.titulo}</td>
                                    <td>{e.autor}</td>
                                    <td> {e.descripcion} </td>
                                    <td>
                                        <Link to={{
                                            pathname: '/editpeliculas', state: {
                                                data: e
                                            }
                                        }}><Button style={{ color: 'white' }} color="warning" >
                                               Edit
</Button></Link>
                                    </td>
                                    <td><Button style={{ color: 'white' }} color="danger" onClick={()=>{ handleDelete(e)}} >
                                               Eliminar
</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    }
                </Table>
                {data ? " " : <div align="center">
                    <Spinner animation="border" role="status">

                    </Spinner>
                </div>}

            </CardBody>
            <CardFooter>
                Esteban, Todos los derechos reservados 2019
        </CardFooter>
        </Card>

    );
}

export default Home;