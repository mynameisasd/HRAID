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

    const [ loading, setLoading  ] = useState(true);
    const [ defaultData, setDefaultData ] = useState([{}])
    const [ filter, setFilter ] = useState('');

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
            cell: (row) => (
                row.emp_profile_picture != '' ? <img src={'http://localhost:80/hraid_api/upload_pictures/' + row.emp_profile_picture } alt="Profile Picture" /> : <img src={MyImage} alt="Profile Picture" />

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
   
        axios.get('http://localhost/hraid_api/get_employee_records_page.php')
            .then(function (response) {

                setEmployee(response.data);
                setDefaultData(response.data);
                setLoading(false);

            });
                   
    },[]);


    function handleSearchChange(e){

        let search = e.target.value

        if(e.target.value == '')
        {
            let oldData = defaultData;
            setEmployee(oldData);
        }
        else
        {
            setFilter(search.toLowerCase());
        }
        
    }

    function submitFilter()
    {

        var results = [];

        var toSearch = filter;

            for(var i=0; i<employee.length; i++) {
                let count = 0
                for(let key in employee[i]) {
                    let tolowercase = employee[i][key]; //conver to lower case
                    if(tolowercase.toLowerCase().indexOf(toSearch)!=-1) {

                        results.push(employee[i]);
                        
                    }

                }
            }
  
            setEmployee(results)
        
    }


  
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
                                <div>
                                    <FloatingLabel controlId="search" label="Search.....">
                                        <Form.Control size='sm' type="text" placeholder="Search....." onChange={handleSearchChange} />
                                    </FloatingLabel>
                                    <br/>   
                                    <Button className='text-white' variant="info" size="sm" onClick={submitFilter}>Filter</Button>
                                </div>
                                
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
                            progressPending={loading}
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