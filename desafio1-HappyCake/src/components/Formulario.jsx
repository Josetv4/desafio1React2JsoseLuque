import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
    return (
        <Container className="text-center mt-3">
            <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Label>Descripción:</Form.Label>
                <FloatingLabel>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button className="mt-3" variant="danger" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};
export default Contacto;