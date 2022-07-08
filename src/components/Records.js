import React, { useState, useEffect } from 'react'
import GlobalNavigation from './GlobalNavigation'
import GlobalFooter from './GlobalFooter'
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component'
import { Container, Row, Col, FloatingLabel, Form, Button  } from 'react-bootstrap'
import axios from 'axios'


import MyImage from '../img/User-avatar.png';
import e from 'cors';


const Records = () => {
    const [ loadData, setLoadData ] = useState(false); 
    //set a default value for error handling
    const [ employee, setEmployee ] = useState([
        {   emp_id: '0',
            emp_firstname:'Juan',
            emp_middlename:'Avellana',
            emp_lastname:'Dela Cruz',
            emp_suffix:'',
        }
    ]);

     const columns =  [
        {
            name: 'ID No.',
            width:'100px',
            selector: row => row.emp_id,
            sortable: true,
        },
        {
            name: 'Pictures',
            width:'100px',
            cell: () => (
                <img src={MyImage} alt="picture" />
            )
            
        },
        {
            name: 'First Name',
            selector: row => row.emp_firstname,
            sortable: true,
        },
        {
            name: 'Middle Name',
            selector: row => row.emp_middlename,
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: row => row.emp_lastname,
            sortable: true,
        },
        {
            name: 'Suffix',
            selector: row => row.emp_suffix  ,
            sortable: true,
        },
        {
            name:'Options',
            cell: (row) => (
                <div style={{width:'100%'}}>
                    <Button variant="success" size="sm">
                        <Link className="text-white" to={ "/profile/" + row.emp_id}>MORE INFO</Link>
                    </Button>
                </div>
            )
        }
    ];
    
 
    useEffect(() => {
   
        axios.get('http://localhost/hraid_api/get_employee.php')
            .then(function (response) {

                setEmployee(response.data);

            });
                   
    },[]);


  
    return (
        <Container>

            <GlobalNavigation/>
            <br/>
            <Row>
                <Col>
                    <div className='records-container'>
                        
                        <Row>
                            <Col>
                                <h2 style={{textAlign:"left"}}>RECORDS</h2>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="search" label="Search.....">
                                    <Form.Control size='sm' type="text" placeholder="Search....." />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <br/>

                        <DataTable
                            columns={columns}
                            data={employee}
                            pagination={true}
                            pointerOnHover={true}
                            responsive={true}
                            striped={true}
                        />
                    </div>
                </Col>
            </Row>
            <br/>
            <GlobalFooter/>
            
        </Container>
    )
}

export default Records