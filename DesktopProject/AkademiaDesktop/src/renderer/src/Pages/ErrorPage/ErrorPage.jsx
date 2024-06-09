import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container className="pt-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="text-center">
                        <h1>Página não encontrada!</h1>
                        <p>Desculpe, a página que você está procurando não existe.</p>
                        <Button variant="warning" href="/">Voltar para a Página Inicial</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;
