import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import GlobalFooter from "./GlobalFooter";


import GlobalNavigation from './GlobalNavigation'


import MyImage from '../img/User-avatar.png';



const Dashboard = () => {

    const [ eligibility , setEligibility ] = useState([]);



    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <div className="dashboard-content">
                <h2 style={{textAlign:"left"}}>DASHBOARD</h2>

                <Row>
                    <Col md="8">
                        <div style={{background:"white"}}>
                            <Carousel interval={4000} style={{background:'lightblue'}}>
                                <Carousel.Item>
                                    <Row>
                                        <Col md="4">
                                            <img
                                                className="d-block w-100"
                                                src={MyImage}
                                                alt="First slide"
                                            />
                                        </Col>
                                        <Col md="8">
                                            <div style={{textAlign:"left",padding:'15px'}}>
                                                <h2>Juan Dela Cruz</h2>
                                                <p>Address: Puerto, Princesa City, Palawan</p>
                                                <p>Contact No.: 09298468754</p>
                                                <p>Email Add.: juan.delacruz@gmail.com</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col md="4">
                                            <img
                                                className="d-block w-100"
                                                src={MyImage}
                                                alt="First slide"
                                            />
                                        </Col>
                                        <Col md="8">
                                            <div style={{textAlign:"left",padding:'15px'}}>
                                                <h2>Juan Dela Cruz 2</h2>
                                                <p>Address: Puerto, Princesa City, Palawan</p>
                                                <p>Contact No.: 09298468754</p>
                                                <p>Email Add.: juan.delacruz@gmail.com</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    <Col md="4">
                        <div style={{background:"white", padding:'15px'}}>
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