import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../AlunosCadastrados/style.css';

function AlunosCadastrados() {
    const navigate = useNavigate();

    // Estado para armazenar os alunos
    const [alunos, setAlunos] = useState([
        { id: 1, nome: 'João Silva' },
        { id: 2, nome: 'Maria Oliveira' },
        { id: 3, nome: 'Pedro Santos' }
    ]);

    // Estado para o modal de confirmação de exclusão
    const [showModal, setShowModal] = useState(false);
    const [alunoToDelete, setAlunoToDelete] = useState(null);

    // Função para editar aluno
    const handleEdit = (id) => {
        // Lógica para editar o aluno
        console.log(`Editar aluno com ID: ${id}`);
    };

    // Função para excluir aluno
    const handleDelete = (id) => {
        setShowModal(true);
        setAlunoToDelete(id);
    };

    // Função para confirmar exclusão
    const confirmDelete = () => {
        setAlunos(alunos.filter(aluno => aluno.id !== alunoToDelete));
        setShowModal(false);
    };

    return (
        <div className="bg-gradient">
            <Container className="pt-4 pb-4">
                <Row className="mb-4">
                    <Col>
                        <Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <h1 className="text-center">Alunos Cadastrados</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {alunos.map(aluno => (
                                <ListGroup.Item key={aluno.id} className="d-flex justify-content-between align-items-center">
                                    {aluno.nome}
                                    <div>
                                        <Button variant="warning" className="me-2" onClick={() => handleEdit(aluno.id)}>Editar</Button>
                                        <Button variant="danger" onClick={() => handleDelete(aluno.id)}>Excluir</Button>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação de Exclusão</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja excluir este aluno?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
                    <Button variant="danger" onClick={confirmDelete}>Excluir</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AlunosCadastrados;
