import React,{useEffect,useState} from 'react'
import {useSelector}from 'react-redux'
import { Card, CardBody, CardHeader, CardFooter,Alert } from 'reactstrap';

const Inicio = (props) => {

    const  lo = useSelector(store => store.login.auth.data);
    const [alert,setAlert]=useState(false);

    useEffect(()=>{
        if(lo===true){
            setAlert(true);
        }
    },[lo])
   


    return (
        <Card style={{ width: '100%', height: '100%' }}>
          
            <CardHeader>
            </CardHeader>
            <CardBody>
            {alert &&<Alert color="success">
       Sesión Iniciada!
      </Alert>}
               <h1>Bienvenido!</h1>
                
            </CardBody>
            <CardFooter>
                Jose, Todos los derechos reservados 2019
        </CardFooter>
        </Card>

    );
}

export default Inicio;