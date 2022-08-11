import React, { useState, useEffect } from 'react'
import { Container, Row, Col, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import GlobalNavigation from './GlobalNavigation'
import GlobalFooter from './GlobalFooter'
import ConvertedOfficeIdToName from './ConvertedOfficeIdToName'
import ConvertedPositionIdtoName from './ConvertedPositionIdtoName'
const AddEmployee = () => {

    const {register, handleSubmit, errors, reset } = useForm();

    // <------------------------ Desired Position Array
    const [ desiredPosition, setDesiredPosition ] = useState([])
    const [ newDesiredPosition, setNewDesiredPosition ] = useState('')
    const [ loadCreatedPosition, setLoadCreatedPosition ] = useState([{}])

    function handleNewDesiredPositionChange(e){

        setNewDesiredPosition(e.target.value)
        
    }

    function addDesiredPositionToArray(){
    
            if(newDesiredPosition != '')
            {
                let arr = desiredPosition
                arr.push(newDesiredPosition)
                setNewDesiredPosition('')
            }
            else
            {
                alert('Desired Position is null')
            }
           
    }

    //----------------->

    //<---------------- Eligibility Array

    const [ eligibility, setEligibility ] = useState([])
    const [ newEligibility, setNewEligibility ] = useState('')

    function handleNewEligibilityChange(e){
        setNewEligibility(e.target.value)
    }

    function addEligibilityToArray(){
        if(newEligibility != '')
        {
            let arr = eligibility
            arr.push(newEligibility)
            setNewEligibility('')
        }
        else
        {
            alert('Eligibiliy is null')
        }
       
    }

    //--------------->


    //<----------------

    const [ training, setTraining ] = useState([])
    const [ newTraining, setNewTraining ] = useState('')

    function handleNewTrainingChange(e){
        setNewTraining(e.target.value)
    }

    function addTrainingToArray(){
        if(newTraining != '')
        {
            let arr = training
            arr.push(newTraining)
            setNewTraining('')
        }
        else
        {
            alert('Training is null')
        }
    }




    //------------->

    //submit the form using react hook form
    const onSubmit = (data) => {

        data.desired_position = desiredPosition;
        data.eligibility = eligibility;
        data.training = training;

        axios.post('http://localhost:80/hraid_api/add_employee.php', data )
            .then(function (response) {
 
               alert('Employee Added');
               reset();
               setDesiredPosition([]);
               setTraining([]);
               setEligibility([]);
            
            })
            
    }

    useEffect(()=> {

        axios.post('http://localhost:80/hraid_api/get_all_available_position.php',  )
        .then(function (response) {

           setLoadCreatedPosition(response.data)
        
        })

    },[])

    return (
        <Container>

            <GlobalNavigation />
            <br/>
            <div className='form-container'>
                <h2 style={{textAlign:"left"}}>ADD APPLICANT</h2>
                <br/>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row className='g-2'>
                        <Col md="3">
                            <FloatingLabel controlId="daterecieved" label="Date Recieved">
                                <Form.Control size='sm' type="date" placeholder="Date" name="datereceived" {...register('datereceived')} required />
                               
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
                                <Form.Control size='sm' type="text" placeholder="Last Name" name="lastname" {...register('lastname')} required />
                            </FloatingLabel>
                        </Col>
                        <Col md="3">
                            <FloatingLabel controlId="suffix" label="Suffix">
                                <Form.Control size='sm' type="text" placeholder="Suffix" name="suffix" {...register('suffix')} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <hr />
                    <Row className='g-2'>
                        <Col md="5">
                            <FloatingLabel controlId="floatingSelectGrid" label="Desired Position">
                            <Form.Select aria-label="Floating label select example" name="desired_position"  onChange={handleNewDesiredPositionChange} >
                                <option>Open this select menu</option>
                                {
                                    loadCreatedPosition.map((value, index) =>
                                        <option key={index} value={value.p_id}> { value.p_position_title + ' | '  } <ConvertedOfficeIdToName office_id={value.p_office} /> </option>
                                    )

                                }
                            </Form.Select>
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
                                        <ListGroup.Item key={index}>
                                            <Row >           
                                                <Col md="8">
                                                    <div className='align-content-center'>
                                                    <ConvertedPositionIdtoName position_id={position}/>
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div style={{display:"inline-grid",gridGap:"10px"}}>

                                                        <Button 
                                                            variant="danger" 
                                                            size="sm" 
                                                            onClick={()=>{
                                                                let arr = [...desiredPosition]
                                                                let i = arr.indexOf(position)
                                                                arr.splice(i, 1);
                                                                setDesiredPosition(arr)
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
                    <hr />
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
                                <Form.Control size='sm' type="text" placeholder="Eligibility" value={newEligibility} onChange={handleNewEligibilityChange} />
                            </FloatingLabel>
                        </Col>
                        <Col md="1">
                            <button size="sm" style={{color:"white",}} type="button" class="btn btn-info" onClick={addEligibilityToArray}>ADD</button>
                        </Col>
                        <Col md="6">
                            <h6>List of Eligibility</h6>
                            <ListGroup>
                                
                                {
                                    eligibility.map((value, index) =>
                                        <ListGroup.Item  key={index}>
                                            <Row>           
                                                <Col md="8">
                                                    <div className='align-content-center'>
                                                        {value}
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div style={{display:"inline-grid",gridGap:"10px"}}>
                                                        <Button 
                                                        variant="danger" 
                                                        size="sm"
                                                        onClick={()=> {
                                                            let arr = [...eligibility]
                                                            let i = arr.indexOf(value)
                                                            arr.splice(i, 1);
                                                            setEligibility(arr)
                                                        }}
                                                        >
                                                            REMOVE
                                                        </Button>
                                                        
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                }
                            </ListGroup>
                        </Col>
                      
                    </Row>
                    <hr />
                    <Row className='g-2'>
                        <Col md="5">
                            <FloatingLabel controlId="training" label="Training">
                                <Form.Control size='sm' type="text" placeholder="Training" value={newTraining} onChange={handleNewTrainingChange} />
                            </FloatingLabel>
                        </Col>
                        <Col md="1">
                            <button size="sm" style={{color:"white",}} type="button" class="btn btn-info" onClick={addTrainingToArray} >ADD</button>
                        </Col>
                        <Col md="6">
                            <h6>List of Trainings</h6>
                            <ListGroup>
                                {
                                    training.map((value, index)=>
                                        <ListGroup.Item  key={index}>
                                            <Row>           
                                                <Col md="8">
                                                    <div className='align-content-center'>
                                                        {value}
                                                    </div>
                                                </Col>
                                                <Col md="4">
                                                    <div style={{display:"inline-grid",gridGap:"10px"}}>
                                                        <Button 
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={()=>{
                                                                let arr = [...training]
                                                                let i = arr.indexOf(value)
                                                                arr.splice(i, 1);
                                                                setTraining(arr)
                                                            }}
                                                            >
                                                            REMOVE
                                                        </Button>
                                                        
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                }
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