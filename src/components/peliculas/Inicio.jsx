import React from 'react'
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';

const Inicio = (props) => {
    return (
        <Card style={{ width: '100%', height: '100%' }}>
          
            <CardHeader>
            </CardHeader>
            <CardBody>
               <h1>Bienvenido!</h1>
                
            </CardBody>
            <CardFooter>
                Jose, Todos los derechos reservados 2019
        </CardFooter>
        </Card>

    );
}

export default Inicio;