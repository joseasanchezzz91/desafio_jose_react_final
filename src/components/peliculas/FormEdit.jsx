import React ,{useState}from 'react';
import {Form, FormGroup, Input, Button, Label,CardHeader} from 'reactstrap';
import useGenericInput from '../../hooks/useGenericInput'
import {peliculaAsyncAtionEdit} from '../../store/modules/peliculas/peliculas.actions'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const FormEdit = (props) => {

const valor=props.location.state;
    const id=valor.data.id;
    const titulo = useGenericInput(valor.data.titulo, 'text');
    const descripcion = useGenericInput(valor.data.descripcion, 'text');
    const autor = useGenericInput(valor.data.autor,'text')

    const dispatch = useDispatch(); 
    const buttonIsDisabled = () => titulo.value === '' || descripcion.value === '' || autor.value === '';
    

    const handled =(e)=>{
        e.preventDefault();
        let array={
                "id":id,
                "titulo":titulo.value,
                "autor":autor.value,
                 "descripcion":descripcion.value}
            dispatch(peliculaAsyncAtionEdit(array)); 
            setTimeout(() => {
                props.history.push("/peliculas");
                
            }, 2000);
    }

    return (
<div>
        <CardHeader>
        {/* <Link to="/createpeliculas"> <Button style={{ color: 'white' }} color="info"> Agregar </Button> </Link> */}
        <h3>Edit</h3>
    </CardHeader>
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
            <Button color='info'  disabled={buttonIsDisabled()} type="submit" >Guardar</Button>
        </Form>
        </div>
    )
}

export default FormEdit;