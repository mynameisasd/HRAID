import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import GlobalFooter from './GlobalFooter'
import GlobalNavigation from './GlobalNavigation'
import { Link } from 'react-router-dom';

import MyImage from '../img/User-avatar.png';

const Profile = () => {


    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <div className='profile-container'>
                <Row className='r-pad-marg' style={{background:'white',}}>
                    <Col md="2">
                        <img src={MyImage} alt="Profile Picture" />
                    </Col>
                    <Col md="10">
                        <div style={{textAlign:'left', padding:'15px'}} >
                            <b><h4>Juan Dela Cruz</h4></b>
                            <p>Sorrilo Street, Barangay Poblacion, Taytay, Palawan</p>
                            <p>buitizon.jerick@yahoo.com</p>
                            <p>09498339310</p>
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md="8">
                        <div style={{background:'white', padding:'15px'}}>
                            <Row>
                                <Col md="2" style={{textAlign:'right'}}>
                                    Birthday:
                                </Col>
                                <Col md="10" style={{textAlign:'left'}}>
                                    September 14, 1997
                                </Col>
                            </Row>
                            <Row>
                                <Col md="2" style={{textAlign:'right'}}>
                                    Gender:
                                </Col>
                                <Col md="10" style={{textAlign:'left'}}>
                                    Male
                                </Col>
                            </Row>
                            <Row>
                                <Col md="2" style={{textAlign:'right'}}>
                                    Religion:
                                </Col>
                                <Col md="10" style={{textAlign:'left'}}>
                                    Catholic
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Highest Educational Attainment:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    College Graduate
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Eligibility:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    <ul>
                                        <li>Board Secretary II</li>
                                        <li>Audio Visual Equipment Operator II</li>
                                    </ul>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Training:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    <ul>
                                        <li>Gender Sensitivity</li>
                                        <li>Computer System Servicing NCII</li>
                                    </ul>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Experience <i>No. of Years</i>:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    4
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Data on Person with Disability:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    N/A
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md="4">
                        <div style={{background:'white',padding:'15px'}}>

                            <h4>Settings</h4>
                            <hr/>
                            <div style={{display:'inline-grid'}}>
                                <Button variant="success" size="sm">
                                    <Link className='text-white' to="/assestment">Assestment</Link>
                                </Button>
                                <br/>
                                <Button variant="info" size="sm">
                                    Upload Picture
                                </Button>
                                <br/>
                                <Button variant="info" size="sm">
                                    View PDF File
                                </Button>
                                <br/>
                                <Button variant="info" size="sm">
                                    Update Info
                                </Button>
                                <br/>
                                <hr/>
                                <br/>
                                <Button variant="danger" size="sm">
                                    Delete
                                </Button>
                                
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </div>

            <GlobalFooter/>
        </Container>
    )
}


export default Profile