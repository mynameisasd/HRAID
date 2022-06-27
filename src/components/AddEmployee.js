import React from 'react'
import { Container, Row, Col, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'

import GlobalNavigation from './GlobalNavigation'
import GlobalFooter from './GlobalFooter'

const AddEmployee = () => {

    return (
        <Container>

            <GlobalNavigation />
            <br/>
            <div className='form-container'>
                <h2 style={{textAlign:"left"}}>ADD EMPLOYEE</h2>
                <br/>
                <Form>

                    <Row>
                        <Col md="3">
                            <FloatingLabel controlId="daterecieved" label="Date Recieved">
                                <Form.Control size='sm' type="date" placeholder="Date" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="3">
                            <FloatingLabel controlId="firstname" label="First Name">
                                <Form.Control size='sm' type="text" placeholder="First Name" required />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="middlename" label="Middle Name">
                                <Form.Control size='sm' type="text" placeholder="Middle Name" />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="lastname" label="Last Name">
                                <Form.Control size='sm' type="text" placeholder="Last Name" />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="suffix" label="Suffix">
                                <Form.Control size='sm' type="text" placeholder="Suffix" />

                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="desiredposition" label="Desired Position">
                                <Form.Control size='sm' type="text" placeholder="Desired Position" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="6">
                            <FloatingLabel controlId="address" label="Address">
                                <Form.Control size='sm' type="text" placeholder="Address" />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="emailaddress" label="Email Address">
                                <Form.Control size='sm' type="text" placeholder="Email Address" />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="contactnumber" label="Contact Number">
                                <Form.Control size='sm' type="text" placeholder="Contact Number" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="3">
                            <FloatingLabel controlId="birthday" label="Birthday">
                                <Form.Control size='sm' type="date" placeholder="Birthday" />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="floatingSelectGrid" label="Gender">
                            <Form.Select aria-label="Floating label select example">
                                <option>Open this select menu</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="religion" label="Religion">
                                <Form.Control size='sm' type="text" placeholder="Religion" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="highesteducationalattainment" label="Highest Educational Attainment">
                                <Form.Control size='sm' type="text" placeholder="Highest Educational Attainment" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <Row>
                        <Col md="5">
                            <FloatingLabel controlId="eligibility" label="Eligibility">
                                <Form.Control size='sm' type="text" placeholder="Eligibility" />
                            </FloatingLabel>
                        </Col>
                        <Col md="1">
                            <button size="sm" style={{color:"white",}} type="button" class="btn btn-info">ADD</button>
                        </Col>
                        <Col md="6">
                            <h6>List of Eligibility</h6>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>           
                                        <Col md="8">
                                            <div className='align-content-center'>
                                                Lorem Ipsum
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div style={{display:"inline-grid",gridGap:"10px"}}>
                                                <Button variant="danger" size="sm">
                                                    REMOVE
                                                </Button>
                                                <Button variant="info" size="sm">
                                                    UPDATE
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>           
                                        <Col md="8">
                                            <div className='align-content-center'>
                                                Lorem Ipsum 2
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div style={{display:"inline-grid",gridGap:"10px"}}>
                                                <Button variant="danger" size="sm">
                                                    REMOVE
                                                </Button>
                                                <Button variant="info" size="sm">
                                                    UPDATE
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                      
                    </Row>
                    <hr />
                    <Row>
                        <Col md="5">
                            <FloatingLabel controlId="training" label="Training">
                                <Form.Control size='sm' type="text" placeholder="Training" />
                            </FloatingLabel>
                        </Col>
                        <Col md="1">
                            <button size="sm" style={{color:"white",}} type="button" class="btn btn-info">ADD</button>
                        </Col>
                        <Col md="6">
                            <h6>List of Trainings</h6>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>           
                                        <Col md="8">
                                            <div className='align-content-center'>
                                                Lorem Ipsum
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div style={{display:"inline-grid",gridGap:"10px"}}>
                                                <Button variant="danger" size="sm">
                                                    REMOVE
                                                </Button>
                                                <Button variant="info" size="sm">
                                                    UPDATE
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>           
                                        <Col md="8">
                                            <div className='align-content-center'>
                                                Lorem Ipsum 2
                                            </div>
                                        </Col>
                                        <Col md="4">
                                            <div style={{display:"inline-grid",gridGap:"10px"}}>
                                                <Button variant="danger" size="sm">
                                                    REMOVE
                                                </Button>
                                                <Button variant="info" size="sm">
                                                    UPDATE
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="eperience" label="Experience (No. of Years)">
                                <Form.Control size='sm' type="text" placeholder="Experience (No. of Years)"/>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="dataonpersonwithdisability" label="Data on Persons With Disability">
                                <Form.Control size='sm' type="text" placeholder="Data on Persons With Disability" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col md="2">
                            <Form.Check aria-label="option 1" label="PASS INITIAL ASSESSMENT?" />
                        </Col>
                        <Col md="2">
                            <Form.Check aria-label="option 1" label="TOOK THE EXAM?" />
                        </Col>
                        <Col md="2">
                            <Form.Check aria-label="option 1" label="PASSED THE EXAM?" />
                        </Col>
                        <Col md="2">
                            <Form.Check aria-label="option 1" label="TOOK THE INTERVIEW?" />
                        </Col>
                        <Col md="2">
                            <Form.Check aria-label="option 1" label="RECOMMENDED TO MAYOR?" />
                        </Col>
                        <Col md="2">
                            <Form.Check aria-label="option 1" label="ISSUED APPT" />
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col style={{textAlign:'right'}}>
                            <button size="sm" style={{color:"white",}} type="button" class="btn btn-success">SUBMIT</button>
                        </Col>
                    </Row>

                </Form>
            </div>
            <br />
            <GlobalFooter/>
        </Container>
    )
}

export default AddEmployee