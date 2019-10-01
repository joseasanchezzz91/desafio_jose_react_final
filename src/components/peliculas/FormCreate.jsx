import React ,{useState, useEffect}from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';
import useGenericInput from './../../hooks/useGenericInput'
import {peliculaAsyncAtionCreate} from '../../store/modules/peliculas/peliculas.actions'
import { useDispatch } from 'react-redux';



const FormCreate = (props) => {
    const titulo = useGenericInput('', 'text');
    const descripcion = useGenericInput('', 'text');
    const autor = useGenericInput('','text')

    const dispatch = useDispatch();
    const [registro,setRegistro]=useState(false);
    const buttonIsDisabled = () => titulo.value === '' || descripcion.value === '' || autor.value === '';
    

    const handled =(e)=>{
        e.preventDefault();
        let array={"titulo":titulo.value,
                    "autor":autor.value,
                    "descripcion":descripcion.value}
            dispatch(peliculaAsyncAtionCreate(array)); 
            setRegistro(true);
            props.history.push("/peliculas");
          
       
    }

    useEffect(()=>{
        // props.history.push("/peliculas"); 
     
        // props.history('/peliculas')
    },[registro])



    return (
        <Form  onSubmit={handled}>
            <FormGroup>
                <Label>Titulo</Label>
                <Input {...titulo} />
            </FormGroup>
            <FormGroup>
                <Label>Autor</Label>
                <Input {...autor} />
            </FormGroup>
            <FormGroup>
                <Label>Descripción</Label>
                <Input {...descripcion} />
            </FormGroup>
            <Button color='info' disabled={buttonIsDisabled()} type="submit" >Crear</Button>
        </Form>
    )
}

export default FormCreate;