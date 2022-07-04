import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GlobalFooter from "./GlobalFooter";


import GlobalNavigation from './GlobalNavigation'

const Dashboard = () => {

    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <div className="dashboard-content">
                <h2 style={{textAlign:"left"}}>DASHBOARD</h2>

                <Row>
                    <Col md="8">
                        <div style={{background:"white"}}>
                            <h4>Content</h4>
                        </div>
                       
                    </Col>
                    <Col md="4">
                        <div style={{background:"white"}}>
                            <h4>Side Content</h4>
                        </div>
                    </Col>
                </Row>

            </div>
            <br/>
            <GlobalFooter/>
        </Container>
    )
}

export default Dashboard