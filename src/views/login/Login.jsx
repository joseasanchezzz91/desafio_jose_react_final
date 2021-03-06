import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody,Alert } from 'reactstrap';
import useInput from '../../hooks/useGenericInput';
import { loginActionsAsyncCreator as loginAction } from '../../store/modules/auth/login.actions';


const Login = (props) => {
    const dispatch = useDispatch();
    const jwt = useSelector(store => store.login.auth.data);
    const error = useSelector(store => store.login.auth.error);
    const errorMessage = useSelector(store => store.login.auth.errorMessage);
    
    // console.log(JSON.stringify(jwt))
    const email = useInput('', '');
    const password = useInput('', 'password');

    const buttonIsDisabled = () => password.value === '' || email.value === '';
    
    useEffect(() => {
        if (jwt !== null) {
            props.history.push('/inicio/bienvenido');
        }
    

    }, [jwt,error])

    return (
        <Container className="mt-4">
            <Row>
                <Col sm={{ size: 4, offset: 4}}>
                    <Card>
                        <CardHeader className="text-center"><h4>Login</h4></CardHeader>
                        <CardBody>
                            <Form>
                                <pre className="text-left">
                                </pre>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input {...email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input {...password} />
                                </FormGroup>
                                <Button color="success"
                                    disabled={buttonIsDisabled()}
                                    onClick={() => dispatch(loginAction(email.value, password.value))}
                                >Iniciar Sesión</Button>
                            </Form></CardBody>
                            {error && <Alert color="danger">
        {errorMessage}
      </Alert>}
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;