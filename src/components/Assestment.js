import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import EmployeeBasicInfo from './EmployeeBasicInfo'
import GlobalFooter from './GlobalFooter'
import GlobalNavigation from './GlobalNavigation'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import ConvertedPositionIdtoName from './ConvertedPositionIdtoName'


const Assestment = () =>{
    
    const { emp_id, dp_id, dp_position } = useParams();
    const {register, handleSubmit, errors, reset } = useForm();
    const [ assestment, setAssestment ] = useState([{}]);
    const navigate = useNavigate()

    const onSubmit = (data) =>
    {
        data.emp_id = emp_id;
        data.dp_id = dp_id;
        data.dp_position = dp_position;
        
        axios.post('http://localhost/hraid_api/add_assestment.php', data 
        ).then(function (response) {

            alert('data updated')
            navigate('/profile/' + emp_id)
            console.log(response.data)

        });

       
    }


    useEffect(() =>{

        let pass_id = {
            emp_id: emp_id,
            dp_id: dp_id
        }

        axios.post('http://localhost/hraid_api/get_assestment.php', pass_id 
        ).then(function (response) {
          
            if(response.data == '')
            {
                //if assestment is null
            }
            else
            {
                let arr = response.data;
                setAssestment(arr[0]);
                reset({ ...arr[0]});
            }
           
        });

    },[])

    

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
                            <h1>Assestment  </h1>
                            <h4 style={{color:'green'}}>Position: <strong><ConvertedPositionIdtoName position_id={dp_position} /></strong> </h4>
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Row className='g-2'>
                            
                                        <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                            {
                                                assestment.ass_initial_assestment == 'passed'  ? 
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="Initial Assestment?" 
                                                    value="passed" 
                                                    name="initial_assestment" 
                                                    defaultChecked={true}
                                                    {...register('initial_assestment')}
                                                /> :
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="Initial Assestment?" 
                                                    value="passed" 
                                                    name="initial_assestment" 
                                                    {...register('initial_assestment')}
                                                />
                                            }
                                            

                                        </Col>
                                        <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                            {
                                                assestment.ass_took_the_exam == 'passed' ?
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="TOOK THE EXAM?" 
                                                    value="passed" 
                                                    name="took_the_exam"  
                                                    defaultChecked={true}
                                                    {...register('took_the_exam')}
                                                /> :
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="TOOK THE EXAM?" 
                                                    value="passed" 
                                                    name="took_the_exam"  
                                                    {...register('took_the_exam')}
                                                />
                                            }
                                        </Col>
                                        <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                            {
                                                assestment.ass_took_the_exam == 'passed' ?
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="PASSED THE EXAM?" 
                                                    value="passed" 
                                                    name="passed_the_exam"
                                                    defaultChecked={true}
                                                    {...register('passed_the_exam')} 
                                                /> :
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="PASSED THE EXAM?" 
                                                    value="passed" 
                                                    name="passed_the_exam"
                                                    {...register('passed_the_exam')} 
                                                />
                                            }
                                        </Col>
                                        <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                            {
                                                assestment.ass_took_the_interview == 'passed' ? 
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="TOOK THE INTERVIEW?" 
                                                    value="passed" 
                                                    name="took_the_interview" 
                                                    defaultChecked={true}
                                                    {...register('took_the_interview')} 
                                                /> :
                                                <Form.Check 
                                                    aria-label="option 1" 
                                                    label="TOOK THE INTERVIEW?" 
                                                    value="passed" 
                                                    name="took_the_interview" 
                                                    {...register('took_the_interview')} 
                                                />
                                                }
                                        </Col>
                                        <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                                {
                                                    assestment.ass_recommended_to_mayor == 'passed' ?
                                                        <Form.Check 
                                                        aria-label="option 1" 
                                                        label="RECOMMENDED TO MAYOR?" 
                                                        value="passed" 
                                                        name="recommended_to_mayor" 
                                                        defaultChecked={true}
                                                        {...register('recommended_to_mayor')} 
                                                    /> :
                                                        <Form.Check 
                                                            aria-label="option 1" 
                                                            label="RECOMMENDED TO MAYOR?" 
                                                            value="passed" 
                                                            name="recommended_to_mayor" 
                                                            {...register('recommended_to_mayor')} 
                                                        />
                                                }
                                        </Col>
                                        <Col md="2" style={{border:'1px solid #eee',padding:'5px'}}>
                                                {
                                                    assestment.ass_issued_appointment == 'passed' ? 
                                                    <Form.Check 
                                                        aria-label="option 1" 
                                                        label="ISSUED APPT" 
                                                        defaultValue="passed" 
                                                        name="issued_appointment" 
                                                        defaultChecked={true}
                                                        {...register('issued_appointment')} 
                                                    /> :
                                                    <Form.Check 
                                                        aria-label="option 1" 
                                                        label="ISSUED APPT" 
                                                        value="passed" 
                                                        name="issued_appointment" 
                                                        {...register('issued_appointment')} 
                                                    />
                                                }
                                        </Col>
                                </Row>
                                <br/>
                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Remarks</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group> */}
                                <br />
                                <Button type="submit" variant="success" size="sm">
                                    Save
                                </Button>
                            </form>
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