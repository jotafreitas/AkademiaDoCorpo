import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideBar.css';

const Sidebar = () => {
    const location = useLocation();
    
    return (
        <Nav className="flex-column sidebar">
            <Nav.Link
                as={Link}
                to="/homeAdm"
                className={`sidebar-link ${location.pathname === '/homeAdm' ? 'active' : ''}`}
            >
                Dashboard
            </Nav.Link>
            <Nav.Link
                as={Link}
                to="/alunosCadastrados"
                className={`sidebar-link ${location.pathname === '/alunosCadastrados' ? 'active' : ''}`}
            >
                Alunos Cadastrados
            </Nav.Link>
            <Nav.Link
                as={Link}
                to="/"
                className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
                Sair
            </Nav.Link>
        </Nav>
    );
};

export default Sidebar;
