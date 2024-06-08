import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <Nav className="flex-column" style={{ height: '100vh', borderRight: '1px solid #ddd', padding: '10px' }}>
            <Nav.Link as={Link} to="/homeAdm">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/alunosCadastrados">Alunos Cadastrados</Nav.Link>
            <Nav.Link as={Link} to="/outroRecurso">Outro Recurso</Nav.Link>
        </Nav>
    );
};

export default Sidebar;