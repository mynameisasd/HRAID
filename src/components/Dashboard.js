import React, { useState } from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import GlobalFooter from "./GlobalFooter";
import Cookies from "universal-cookie";

import GlobalNavigation from './GlobalNavigation'

import { BsGenderMale, BsGenderFemale, BsPercent } from "react-icons/bs";

import MyImage from '../img/User-avatar.png';
import MaleFemle from '../img/malefemale.png';
import GenderPieChart from "./GenderPieChart";


const Dashboard = () => {

    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <div className="dashboard-content">
                <h2 style={{textAlign:"left"}}>DASHBOARD</h2>

                <Row>
                    <Col md="8">
                        <div style={{background:"white",padding:'15px'}}>
                            <br />
                            <Row>
                                <Col md="6">
                                <Card style={{ width: '100%' }}>
                                {/* <Card.Img variant="top" src={MaleFemle} /> */}
                                <Card.Body>
                                    <Card.Title style={{fontWeight:'bolder'}}>APPLICANTS</Card.Title>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <small className="text-left" style={{fontSize:'12px'}}>Total</small>
                                            <h1>100</h1>
                                            <small className="text-left" style={{fontSize:'25px'}}></small>

                                        </Col>
                                        <Col>
                                            <small className="text-left" style={{fontSize:'12px'}}>Male <BsGenderMale style={{color:'green', fontSize:'25px'}} /></small>
                                            <h1 style={{color:'green'}}>60</h1>
                                            <hr />
                                            <h3 style={{color:'green'}}>60 <BsPercent /></h3>
                                        </Col>
                                        <Col>
                                         <small className="text-left" style={{fontSize:'12px'}}>Female <BsGenderFemale style={{color:'pink', fontSize:'25px'}} /></small>
                                            <h1 style={{color:'pink'}}>40</h1>
                                            <hr />
                                            <h3 style={{color:'pink'}}>40 <BsPercent /></h3>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                </Card>
                                </Col>
                                <Col>
                                   {/* <GenderPieChart /> */}
                                </Col>
                            </Row>
                            <br />

                            <Carousel interval={4000} style={{background:'#eee'}}>
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
                            <br />  
                            
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