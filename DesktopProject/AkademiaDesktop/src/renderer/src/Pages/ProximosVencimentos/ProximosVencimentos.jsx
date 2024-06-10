import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, InputGroup, FormControl, DropdownButton, Dropdown, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../ProximosVencimentos/style.css';

function ProximosVencimentos() {
    const navigate = useNavigate();

    // Estado para armazenar os alunos
    const [alunos, setAlunos] = useState([
        { id: 1, nome: 'João Silva', pagamento: '2024-06-10' },
        { id: 2, nome: 'Maria Oliveira', pagamento: '2024-06-15' },
        { id: 3, nome: 'Pedro Santos', pagamento: '2024-06-20' }
    ]);

    // Estado para o filtro de vencimentos
    const [filter, setFilter] = useState('dia');
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar alunos com base no filtro de vencimento
    const filterAlunos = (alunos, filter) => {
        const hoje = new Date();
        const dia = 24 * 60 * 60 * 1000;

        return alunos.filter(aluno => {
            const pagamento = new Date(aluno.pagamento);
            const diferencaDias = (pagamento - hoje) / dia;

            switch (filter) {
                case 'dia':
                    return diferencaDias <= 1;
                case 'semana':
                    return diferencaDias <= 7;
                case 'mes':
                    return diferencaDias <= 30;
                default:
                    return false;
            }
        });
    };

    const filteredAlunos = filterAlunos(alunos, filter).filter(aluno =>
        aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient">
            <Container className="pt-4 pb-4">
                <Row className="mb-4">
                    <Col>
                        <h1 className="text-center">Próximos Vencimentos</h1>
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
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={`Filtrar por: ${filter}`}
                            onSelect={(eventKey) => setFilter(eventKey)}
                        >
                            <Dropdown.Item eventKey="dia">Dia</Dropdown.Item>
                            <Dropdown.Item eventKey="semana">Semana</Dropdown.Item>
                            <Dropdown.Item eventKey="mes">Mês</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {filteredAlunos.map(aluno => (
                                <ListGroup.Item key={aluno.id} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        {aluno.nome} - <small>Próximo Pagamento: {aluno.pagamento}</small>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProximosVencimentos;
