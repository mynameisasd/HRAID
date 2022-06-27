import React from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";


import GlobalNavigation from './GlobalNavigation'

const Dashboard = () => {

    return (
        <Container>
            <GlobalNavigation/>
            <h1>Dashboard</h1>
        </Container>
    )
}

export default Dashboard