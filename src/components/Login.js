import React from 'react'
import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import MyImage from '../img/HR LOGO.png';



const Login = () =>{

    return (
        <Container>
            <br/>
            <h1>Human Resource Applicant Information Database</h1>
            <br/>
            <img src={MyImage} alt="hr logo" />
            <br/>
            <Row>
                <Col md="4" xs="12" sm="12"></Col>
                <Col md="4" xs="12" sm="12">
                    
                    <div className="login-parent">
                        <>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Username" />
                            </FloatingLabel>

                            <FloatingLabel controlId="password" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                            <br/>
                            <Link to="/dashboard">
                                <button style={{color:"white"}} type="button" class="btn btn-info">LOGIN</button>
                            </Link>
                        </>
                    </div>
                </Col>
                <Col md="4" xs="12" sm="12"></Col>
                
                
            </Row>
            <br/>
            <Row>
                <span style={{fontSize:"12px", color:"red"}}><i>Note! For new user please contact system administrator</i></span>
            </Row>
            
        </Container>
        
    )
}


export default Login