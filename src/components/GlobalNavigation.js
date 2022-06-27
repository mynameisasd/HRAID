import React from 'react'

import { Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Link } from 'react-router-dom';


import MyImage from '../img/HR LOGO.png';

const GlobalNavigation = () => {

    return (
        <Row>
            <Col>
                <Navbar style={{padding:"10px"}} bg="light" expand="lg">
                    <Navbar.Brand href="#home"><img style={{width:"50px"}} src={MyImage} alt="Hr Logo" /> HRAID</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/dashboard">Dashboard</Link></Nav.Link>
                            <Nav.Link><Link to="/addemployee">Add Employee</Link></Nav.Link>
                            <Nav.Link><Link to="/records">Records</Link></Nav.Link>
                            {/* Dropdown */}
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}

export default GlobalNavigation