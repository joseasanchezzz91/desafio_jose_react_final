import React from 'react';
import {Form, FormGroup, Input, Button, Label, Container} from 'reactstrap';
import useGenericInput from './../../hooks/useGenericInput'
import {peliculaAsyncAtionCreate} from '../../store/modules/peliculas/peliculas.actions'
import { useDispatch } from 'react-redux';
import { FaPlusCircle,FaArrowAltCircleLeft} from 'react-icons/fa';


const FormCreate = (props) => {
    const titulo = useGenericInput('', 'text');
    const descripcion = useGenericInput('', 'text');
    const autor = useGenericInput('','text')

    const dispatch = useDispatch();
    const buttonIsDisabled = () => titulo.value === '' || descripcion.value === '' || autor.value === '';
    

    const handled =(e)=>{
        e.preventDefault();
        let array={"titulo":titulo.value,
                    "autor":autor.value,
                    "descripcion":descripcion.value}
            dispatch(peliculaAsyncAtionCreate(array)); 
           
            props.history.push("/inicio/peliculas");
    }


const handleCancel=()=>{
    props.history.push("/inicio/peliculas");
}

    return (
        <Container>
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
            <Button color='warning'  onClick={handleCancel}><FaArrowAltCircleLeft/> Cancelar</Button>
            <Button color='info' disabled={buttonIsDisabled()} type="submit" ><FaPlusCircle/> Crear</Button>
          
        </Form>
        </Container>
    )
}

export default FormCreate;