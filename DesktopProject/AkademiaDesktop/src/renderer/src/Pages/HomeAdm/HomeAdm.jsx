import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../HomeAdm/style.css';

function HomeAdm() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <Container>
                <Row className="mt-4 mb-4">
                    <Col>
                        <Link to="/" relative="path">Back</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="text-center">Dashboard da Academia</h1>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Informações da Academia</Card.Title>
                                <Card.Text>
                                    Exiba aqui informações relevantes sobre a academia.
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleNavigate('/info-academia')}>Ver Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Alunos Cadastrados</Card.Title>
                                <Card.Text>
                                    Exiba aqui a lista de alunos cadastrados.
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleNavigate('/alunosCadastrados')}>Ver Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Próximos Vencimentos</Card.Title>
                                <Card.Text>
                                    Exiba aqui os próximos vencimentos das mensalidades.
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleNavigate('/vencimentos')}>Ver Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Área do Administrador</Card.Title>
                                <Card.Text>
                                    Acesse aqui as ferramentas do administrador.
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleNavigate('/admin')}>Ver Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Cadastro de Aluno</Card.Title>
                                <Card.Text>
                                    Realize o cadastro de novos alunos aqui.
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleNavigate('/cadastro-aluno')}>Cadastrar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomeAdm;
