import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "../../Pages/SideBar/style.css"

const Sidebar = () => {
    return (
        <Nav className="flex-column sidebar" style={{ height: '100vh', borderRight: '1px solid #ddd', padding: '10px' }}>
            <Nav.Link as={Link} to="/homeAdm" className="sidebar-link">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/alunosCadastrados" className="sidebar-link">Alunos Cadastrados</Nav.Link>
            <Nav.Link as={Link} to="/" className="sidebar-link" >Sair</Nav.Link>
            
        </Nav>
    );
};

export default Sidebar;