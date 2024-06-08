import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../Pages/SideBar/SideBar';

const AdminLayout = ({ children }) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2} className="p-0">
                    <SideBar />
                </Col>
                <Col xs={10} className="p-4">
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default AdminLayout;
