import React, { useState, useEffect } from 'react'
import { Container, Row, Col, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'

import { useForm } from 'react-hook-form'

import GlobalNavigation from './GlobalNavigation'
import GlobalFooter from './GlobalFooter'

const AddEmployee = () => {

    const {register, handleSubmit, errors } = useForm();

    // <------------------------ Desired Position Array
    const [ desiredPosition, setDesiredPosition ] = useState([])
    const [ newDesiredPosition, setNewDesiredPosition ] = useState('')

    function handleNewDesiredPositionChange(e){

        setNewDesiredPosition(e.target.value);
        
    }

    function addDesiredPositionToArray(){
        
            let arr = desiredPosition;
            arr.push(newDesiredPosition);
            setNewDesiredPosition('');
    }

 
    //----------------->



    //submit the form using react hook form
    const onSubmit = (data  ) => {
        
        console.log(data)
    }

    return (
        <Container>

            <GlobalNavigation />
            <br/>
            <div className='form-container'>
                <h2 style={{textAlign:"left"}}>ADD EMPLOYEE</h2>
                <br/>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row className='g-2'>
                        <Col md="3">
                            <FloatingLabel controlId="daterecieved" label="Date Recieved">
                                <Form.Control size='sm' type="date" placeholder="Date" name="dateReceived" {...register('dateReceived')} required />
                               
                            </FloatingLabel>
                        </Col>
                        <Col md=""></Col>
                    </Row>
                    <br />
                    <Row className='g-2'>
                        <Col md="3" sm="12" xs="12">
                            <FloatingLabel controlId="firstname" label="First Name">
                                <Form.Control size='sm' type="text" placeholder="First Name" name="firstname" {...register('firstname')} required />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="middlename" label="Middle Name">
                                <Form.Control size='sm' type="text" placeholder="Middle Name" name="middlename" {...register('middlename')} />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="lastname" label="Last Name">
                                <Form.Control size='sm' type="text" placeholder="Last Name" name="lastname" {...register('middlename')} required />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="suffix" label="Suffix">
                                <Form.Control size='sm' type="text" placeholder="Suffix" name="suffix" {...register('middlename')} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row className='g-2'>
                        <Col md="5">
                            <FloatingLabel controlId="desiredposition" label="Desired Position">
                                <Form.Control size='sm' type="text" placeholder="Desired Position" value={newDesiredPosition} onChange={handleNewDesiredPositionChange} />
                            </FloatingLabel>
                        </Col>
                        <Col md="1">
                            <button size="sm" style={{color:"white",}} type="button" class="btn btn-info" onClick={addDesiredPositionToArray} >ADD</button>
                        </Col>
                        <Col md="6">
                            <div style={{padding:'15px', background:'white'}}>
                                <h6>Desired Position</h6>
                                <ListGroup>
                                    {
                                        desiredPosition.map((position, index) =>
                                        <ListGroup.Item>
                                            <Row >           
                                                <Col md="8">
                                                    <div className='align-content-center'>
                                                        {position}
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div style={{display:"inline-grid",gridGap:"10px"}}>

                                                        <Button 
                                                            variant="danger" 
                                                            size="sm" 
                                                            key={index} 
                                                            onClick={()=>{
                                                                let arr = [...desiredPosition]
                                                                let i = arr.indexOf(index)
                                                                arr.splice(i, 1);
                                                                setDesiredPosition(arr)
                                                                console.log(desiredPosition)
                                                            }}>
                                                            REMOVE
                                                        </Button>
                                                        
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        )
                                    }
                                </ListGroup>
                            </div>
                        </Col>
                      
                    </Row>
                    <br/>
                    <Row className='g-2'>
                        <Col md="6">
                            <FloatingLabel controlId="address" label="Address">
                                <Form.Control size='sm' type="text" placeholder="Address" name="address" {...register('address')} required />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="emailaddress" label="Email Address">
                                <Form.Control size='sm' type="text" placeholder="Email Address" name="emailaddress" {...register('emailaddress')} />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="contactnumber" label="Contact Number">
                                <Form.Control size='sm' type="text" placeholder="Contact Number" name="contactnumber" {...register('contactnumber')}/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row className='g-2'>
                        <Col md="3">
                            <FloatingLabel controlId="birthday" label="Birthday">
                                <Form.Control size='sm' type="date" placeholder="Birthday" name="birthday"  {...register('birthday')} required />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="floatingSelectGrid" label="Gender">
                            <Form.Select aria-label="Floating label select example" name="genter" {...register("gender")} >
                                <option>Open this select menu</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="religion" label="Religion">
                                <Form.Control size='sm' type="text" placeholder="Religion" name="religion" {...register('religion')}   />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row className='g-2'>
                        <Col>
                            <FloatingLabel controlId="highesteducationalattainment" label="Highest Educational Attainment">
                                <Form.Control size='sm' type="text" placeholder="Highest Educational Attainment" name="highesteducationalattainment" {...register('highesteducationalattainment')} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <Row className='g-2'>
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
                                                
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                      
                    </Row>
                    <hr />
                    <Row className='g-2'>
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
                                               
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <br/>
                    <Row className='g-2'>
                        <Col>
                            <FloatingLabel controlId="eperience" label="Experience (No. of Years)">
                                <Form.Control size='sm' type="text" placeholder="Experience (No. of Years)" name="experience" {...register('experience')}  />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="dataonpersonwithdisability" label="Data on Persons With Disability">
                                <Form.Control size='sm' type="text" placeholder="Data on Persons With Disability" name="dataonpersonwithdisability" {...register('dataonpersonwithdisability')} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <hr/>
                    {/* <Row className='g-2'>
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
                    </Row> */}
                  
                    <Row className='g-2'>
                        <Col style={{textAlign:'right'}}>
                            <button size="sm"  style={{color:"white",}} type="submit" class="btn btn-success">SUBMIT</button>
                        </Col>
                    </Row>

                </form>
            </div>
            <br />
            <GlobalFooter/>
        </Container>
    )
}

export default AddEmployee