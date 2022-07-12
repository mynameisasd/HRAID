import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import EmployeeBasicInfo from './EmployeeBasicInfo'
import GlobalFooter from './GlobalFooter'
import GlobalNavigation from './GlobalNavigation'


const Assestment = () =>{
    
    const { emp_id } = useParams();

    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            
            <div className='assestment-container'>
                <Row>
                    <Col>
                        <EmployeeBasicInfo emp_id={emp_id} />                   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{background:'white', padding:'15px', }}>
                            <h1>Assestment</h1>
                            <br />
                            <Row className='g-2'>
                                <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                    <Form.Check aria-label="option 1" label="PASS INITIAL ASSESSMENT?" />
                                </Col>
                                <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                    <Form.Check aria-label="option 1" label="TOOK THE EXAM?" />
                                </Col>
                                <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                    <Form.Check aria-label="option 1" label="PASSED THE EXAM?" />
                                </Col>
                                <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                    <Form.Check aria-label="option 1" label="TOOK THE INTERVIEW?" />
                                </Col>
                                <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                    <Form.Check aria-label="option 1" label="RECOMMENDED TO MAYOR?" />
                                </Col>
                                <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                    <Form.Check aria-label="option 1" label="ISSUED APPT" />
                                </Col>
                            </Row>
                            <br/>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Remarks</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            <br />
                            <Button variant="success" size="sm">
                                Save
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

            <br/>
            <GlobalFooter />
        </Container>
    )
}

export default Assestment