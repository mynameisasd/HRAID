import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button, Table } from 'react-bootstrap';
import GlobalFooter from './GlobalFooter';
import GlobalNavigation from './GlobalNavigation';
import axios from 'axios';

import { useForm } from 'react-hook-form';
import ConvertedEmployeeIdToName from './ConvertedEmployeeIdToName';


const CreatePosition = () => {

    const [ office, setOffice ] = useState([{}])
    const {register, handleSubmit, errors, reset } = useForm();
    const [ queryPositionPerOffice, setQueryPositionPerOffice ] = useState([{}]);

    //submit the position
    const onSubmit = (data) =>{

        
        axios.post('http://localhost:80/hraid_api/add_position.php', data )
        .then(function (response) {
           alert('Position Created');
           reset();
           reRenderQueryPosition(data.office)
        })


        //to keep the select not blank
        let temp = office;
        setOffice(temp);



    }

    //get the position per office
    const handleQueryOfficeChange = (e) => {
        let office_id = {
            office_id: e.target.value
        }
        axios.post('http://localhost:80/hraid_api/get_position_per_office.php', office_id  )
        .then(function (response) {

         setQueryPositionPerOffice(response.data);
        
        })
    }

    //get all offices for select form
    useEffect(() => {

        axios.post('http://localhost:80/hraid_api/get_office.php',  )
            .then(function (response) {
 
             setOffice(response.data);
            
            })


            //load the mayor office position 
            reRenderQueryPosition(1);

    },[])
    

    const deletePosition = (position_id, position_office_id) =>{
        let position_id_obj = {
            position_id: position_id
        }


        if (window.confirm("Delete Confirnation!") == true) {
            

            axios.post('http://localhost:80/hraid_api/delete_position.php', position_id_obj  )
            .then(function (response) {

            reRenderQueryPosition(position_office_id);
        
            
            })

          }
        
        

    }



    const reRenderQueryPosition = (office_id_to_render) => {

           //load the mayor office position 
           let office_id = {
            office_id: office_id_to_render
        }
        axios.post('http://localhost:80/hraid_api/get_position_per_office.php', office_id  )
        .then(function (response) {

         setQueryPositionPerOffice(response.data);
       
        
        })
    }
    

    return (
        <Container>
            <GlobalNavigation />
            <br/>
            <Row>
                <Col md="4">
                    <div className='create-postion-cont'>
                        <h2>CREATE POSITION</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Select name="office" {...register('office')}>
                                <option>open this select menu</option>
                                {
                                    office.map((value, index)=>
                                    <option key={index} value={value.off_id}>{value.off_office_name}</option>
                                    )
                                }
                                
                            </Form.Select>
                            <br />
                            <FloatingLabel controlId="firstname" label="Position Title">
                                <Form.Control size='sm' type="text" placeholder="Position Title" name="position_title" {...register('position_title')} required />
                            </FloatingLabel>
                            <br />
                            <FloatingLabel controlId="firstname" label="Plantilla Item No.">
                                <Form.Control size='sm' type="text" placeholder="Plantilla Item No." name="plantilla_item_no" {...register('plantilla_item_no')} required />
                            </FloatingLabel>
                            <br />
                            <FloatingLabel controlId="firstname" label="Salary Grade">
                                <Form.Control size='sm' type="text" placeholder="Salary Grade" name="salary_grade" {...register('salary_grade')} required />
                            </FloatingLabel>
                            <br/>
                            <FloatingLabel controlId="daterecieved" label="Posting Date">
                                    <Form.Control size='sm' type="date" placeholder="Posting Date" name="posting_Date" {...register('posting_date')} required />
                                
                                </FloatingLabel>
                            <br/>
                            <FloatingLabel controlId="daterecieved" label="Closing Date">
                                <Form.Control size='sm' type="date" placeholder="Closing Date" name="closing_date" {...register('closing_date')} required />
                            </FloatingLabel>
                            <br />
                            <Button type="submit" variant="success" size="sm">SUBMIT</Button>
                        
                        </form>
                    </div>
                </Col>
                <Col md="8">
                    <div className='create-postion-cont'>
                    <h6>Select Office</h6>
                    <Form.Select onChange={handleQueryOfficeChange}>
                        {
                            office.map((value, index)=>
                            <option key={index} value={value.off_id}>{value.off_office_name}</option>
                            )
                        }
                        
                    </Form.Select>
                        <br />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Title</th>
                                <th>Plantilla No.</th>
                                <th>Salary Grade</th>
                                <th>Appointed</th>
                                <th>Settings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    queryPositionPerOffice.map((value, index) =>
                                        <tr key={index}>
                                            <td>{value.p_position_title}</td>
                                            <td>{value.p_plantilla_item_no}</td>
                                            <td>{value.p_salary_grade}</td>
                                            <td >{value.p_emp_id_appointed == 0 ? <p style={{color:'green'}}>Vacant</p> : <ConvertedEmployeeIdToName emp_id={value.p_emp_id_appointed}/> }</td>
                                            <td><Button variant="danger" onClick={()=> deletePosition(value.p_id, value.p_office)} size="sm">Delete</Button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            <br/>
            <GlobalFooter />
        </Container>
    )
}

export default CreatePosition;