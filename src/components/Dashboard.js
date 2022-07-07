import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import GlobalFooter from "./GlobalFooter";
import Cookies from "universal-cookie";


import GlobalNavigation from './GlobalNavigation'


import MyImage from '../img/User-avatar.png';



const Dashboard = () => {

    const cookies = new Cookies();

    const [ eligibility , setEligibility ] = useState([]);

    console.log(cookies.get('isLogin'));


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
                                                <h2>Juan Dela Cruz 1</h2>
                                                <Row>
                                                    <Col md="4" className="text-right">
                                                        Address:
                                                    </Col>
                                                    <Col md="8" className="text-left">
                                                        Puerto, Princesa City, Palawan
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="4" className="text-right">
                                                        Contact No.:
                                                    </Col>
                                                    <Col md="8" className="text-left">
                                                        09298468754
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="4" className="text-right">
                                                        Email Add.:
                                                    </Col>
                                                    <Col md="8" className="text-left">
                                                        juan.delacruz@gmail.com
                                                    </Col>
                                                </Row>
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
                                                <Row>
                                                    <Col md="4" className="text-right">
                                                        Address:
                                                    </Col>
                                                    <Col md="8" className="text-left">
                                                        Puerto, Princesa City, Palawan
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="4" className="text-right">
                                                        Contact No.:
                                                    </Col>
                                                    <Col md="8" className="text-left">
                                                        09298468754
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="4" className="text-right">
                                                        Email Add.:
                                                    </Col>
                                                    <Col md="8" className="text-left">
                                                        juan.delacruz@gmail.com
                                                    </Col>
                                                </Row>
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