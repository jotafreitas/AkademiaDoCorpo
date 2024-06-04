import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../AlunosCadastrados/style.css';

function AlunosCadastrados() {
    const navigate = useNavigate();

    // Estado para armazenar os alunos
    const [alunos, setAlunos] = useState([
        { id: 1, nome: 'João Silva', vencimento: '2024-06-10' },
        { id: 2, nome: 'Maria Oliveira', vencimento: '2024-06-15' },
        { id: 3, nome: 'Pedro Santos', vencimento: '2024-06-20' }
    ]);

    // Estado para o modal de confirmação de exclusão
    const [showModal, setShowModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [alunoToDelete, setAlunoToDelete] = useState(null);
    const [currentAluno, setCurrentAluno] = useState({ id: '', nome: '', vencimento: '' });
    const [searchTerm, setSearchTerm] = useState('');

    // Função para editar aluno
    const handleEdit = (aluno) => {
        setCurrentAluno(aluno);
        setShowEditModal(true);
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

    // Função para adicionar aluno
    const handleAddAluno = () => {
        setCurrentAluno({ id: '', nome: '', vencimento: '' });
        setShowAddModal(true);
    };

    // Função para salvar novo aluno
    const handleSaveAluno = () => {
        const newId = alunos.length ? alunos[alunos.length - 1].id + 1 : 1;
        setAlunos([...alunos, { id: newId, nome: currentAluno.nome, vencimento: currentAluno.vencimento }]);
        setShowAddModal(false);
    };

    // Função para salvar edição do aluno
    const handleSaveEditAluno = () => {
        setAlunos(alunos.map(aluno => aluno.id === currentAluno.id ? currentAluno : aluno));
        setShowEditModal(false);
    };

    // Filtrar alunos com base no termo de pesquisa
    const filteredAlunos = alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient">
            <Container className="pt-4 pb-4">
                <Row className="mb-4">
                    <Col>
                        <Button variant="danger" onClick={() => navigate(-1)}>Back</Button>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <h1 className="text-center">Alunos Cadastrados</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={9}>
                        <InputGroup>
                            <FormControl
                                placeholder="Pesquisar aluno"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                    </Col>
                    <Col md={3} className="text-end">
                        <Button variant="warning" onClick={handleAddAluno}>Novo Aluno</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {filteredAlunos.map(aluno => (
                                <ListGroup.Item key={aluno.id} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        {aluno.nome} - <small>Vencimento: {aluno.vencimento}</small>
                                    </div>
                                    <div>
                                        <Button variant="warning" className="me-2" onClick={() => handleEdit(aluno)}>Editar</Button>
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

            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Aluno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formAlunoNome">
                            <Form.Label>Nome do Aluno</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o nome do aluno"
                                value={currentAluno.nome}
                                onChange={(e) => setCurrentAluno({ ...currentAluno, nome: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAlunoVencimento">
                            <Form.Label>Data de Vencimento</Form.Label>
                            <Form.Control
                                type="date"
                                value={currentAluno.vencimento}
                                onChange={(e) => setCurrentAluno({ ...currentAluno, vencimento: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>Cancelar</Button>
                    <Button variant="primary" onClick={handleSaveAluno}>Salvar</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Aluno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formAlunoNome">
                            <Form.Label>Nome do Aluno</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o nome do aluno"
                                value={currentAluno.nome}
                                onChange={(e) => setCurrentAluno({ ...currentAluno, nome: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAlunoVencimento">
                            <Form.Label>Data de Vencimento</Form.Label>
                            <Form.Control
                                type="date"
                                value={currentAluno.vencimento}
                                onChange={(e) => setCurrentAluno({ ...currentAluno, vencimento: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancelar</Button>
                    <Button variant="primary" onClick={handleSaveEditAluno}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AlunosCadastrados;
