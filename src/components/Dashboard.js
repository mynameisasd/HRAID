import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Card, Button, ListGroup, Form, Table , FloatingLabel , DropdownButton, Dropdown} from "react-bootstrap";
import GlobalFooter from "./GlobalFooter";
import Cookies from "universal-cookie";
import axios from "axios";
import GlobalNavigation from './GlobalNavigation'
import ConvertedEmployeeIdToName from './ConvertedEmployeeIdToName';


import { BsGenderMale, BsGenderFemale, BsPercent, BsFillPersonFill, BsFileEarmarkPerson } from "react-icons/bs";

import MyImage from '../img/User-avatar.png';
import MaleFemle from '../img/malefemale.png';
import GenderPieChart from "./GenderPieChart";
import ConvertedPositionIdtoName from "./ConvertedPositionIdtoName";


const Dashboard = () => {
    const [ office, setOffice ] = useState([{}]);
    const [ positions , setPositions ] = useState([{}]);
    const [ posLength, setPosLenght ] = useState('');
    const [ countEmployee, setCountEmployee ] = useState([{}]);
    const [ countAppointed, setCountAppointed  ] = useState(0);
    const [ countedPositions, setCountedPositions ] = useState(0);

    const [ dateFrom, setDateFrom ] = useState('');
    const [ dateTo, setDateTo ] = useState('');
    const [ filteredApplicants, setFilteredApplicants ]  = useState('');
    const [ vacantPositions, setVacantPositions ] = useState([{}]);


    const handleDateFromChange = (e) => {
        setDateFrom(e.target.value);
    }

    const handleDateToChange = (e) => {
        setDateTo(e.target.value);
    }

    const submitDateFilter = () => {

        let obj = {
            date_from : dateFrom,
            date_to : dateTo
        }

        axios.post('http://localhost:80/hraid_api/filter_applicants_by_date_range.php', obj  )
        .then(function (response) {
            
            let data = response.data;
            let total_count = 0;

            let objLength = Object.keys(data).length;

            while ( total_count < objLength)
            {
                total_count = total_count + 1;
            }


            setFilteredApplicants(total_count);

        })

    }

    const handleOfficeOnChange = (e) => {

        //load the mayor office position 
        let office_id = {
            office_id: e.target.value
        }

        axios.post('http://localhost:80/hraid_api/get_position_per_office.php', office_id  )
        .then(function (response) {

        setPositions(response.data);
        let countPos = response.data;
        setPosLenght(Object.keys(countPos).length)

        })

    }

    useEffect(()=>{

        axios.post('http://localhost:80/hraid_api/get_office.php',  )
        .then(function (response) {

         setOffice(response.data);
        
        })


        //load the mayors office position
        let office_id = {
            office_id: 1
        }

        axios.post('http://localhost:80/hraid_api/get_position_per_office.php', office_id  )
        .then(function (response) {

        setPositions(response.data);
        let countPos = response.data;
        setPosLenght(Object.keys(countPos).length)

        })


        //get the count of all applicants
        axios.post('http://localhost:80/hraid_api/count_applicants.php',  )
        .then(function (response) {

            let data = response.data
            let total_count = 0;
            let male = 0;
            let female = 0;
            let objLength = Object.keys(data).length;
            //count the total, male and female
            while ( total_count < objLength)
            {

                if(data[total_count]['emp_gender'] == 'Male')
                {
                    male = male + 1;
                }
                else
                {
                    female = female + 1;
                }

                total_count = total_count + 1;
            }


            let obj = {
                'total': total_count,
                'male': male,
                'female': female
            }
           
            setCountEmployee(obj);

        })


        //get the count of all appointed employee
        axios.post('http://localhost:80/hraid_api/count_appointed_employee.php',  )
        .then(function (response) {

            let data = response.data
            let total_count = 0;
            let objLength = Object.keys(data).length;
          
            while ( total_count < objLength)
            {

                total_count = total_count + 1;
            }

            setCountAppointed(total_count);

        })

         //get the count of all appointed employee
         axios.post('http://localhost:80/hraid_api/count_positions.php',  )
         .then(function (response) {
 
             let data = response.data
             let total_count = 0;
             let objLength = Object.keys(data).length;
           
             while ( total_count < objLength)
             {
 
                 total_count = total_count + 1;
             }
 
             setCountedPositions(total_count);
 
         })

         //get all vacant position
         axios.post('http://localhost:80/hraid_api/get_vacant_positions.php',  )
         .then(function (response) {
 
            setVacantPositions(response.data)
 
         })

    },[])
    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <div className="dashboard-content">
                <h2 style={{textAlign:"left"}}>DASHBOARD</h2>

                <Row>
                    <Col md="8">
                        <div style={{background:"white",padding:'15px'}}>
                            <br />
                            <Row>
                                <Col md="6">
                                    <Card style={{ width: '100%' }}>
                                    {/* <Card.Img variant="top" src={MaleFemle} /> */}
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder'}}>APPLICANTS  <BsFillPersonFill /></Card.Title>
                                        <hr />
                                        <Row>   
                                            <Col>
                                                <small className="text-left" style={{fontSize:'12px'}}>Total</small>
                                                <h1>{countEmployee.total}</h1>
                                                <small className="text-left" style={{fontSize:'25px'}}></small>

                                            </Col>
                                            <Col>
                                                <small className="text-left" style={{fontSize:'12px'}}>Male <BsGenderMale style={{color:'green', fontSize:'25px'}} /></small>
                                                <h1 style={{color:'green'}}>{countEmployee.male}</h1>

                                            </Col>
                                            <Col>
                                            <small className="text-left" style={{fontSize:'12px'}}>Female <BsGenderFemale style={{color:'pink', fontSize:'25px'}} /></small>
                                                <h1 style={{color:'pink'}}>{countEmployee.female}</h1>
                                            
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card style={{ width: '100%' }}>
                                    {/* <Card.Img variant="top" src={MaleFemle} /> */}
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder'}}>POSITIONS <BsFileEarmarkPerson/></Card.Title>
                                        <hr />
                                        <Row>
                                            <Col>
                                                <small className="text-left" style={{fontSize:'12px'}}>Total</small>
                                                <h1>{countedPositions}</h1>
                                                <small className="text-left" style={{fontSize:'25px'}}></small>

                                            </Col>
                                            <Col>
                                                <small className="text-left" style={{fontSize:'12px'}}>Employed</small>
                                                <h1 style={{color:'green'}}>{countAppointed}</h1>

                                            </Col>
                                            <Col>
                                            <small className="text-left" style={{fontSize:'12px'}}>Vacant</small>
                                                <h1 style={{color:'red'}}></h1>
                                                <DropdownButton id="dropdown-basic-button" title={ countedPositions - countAppointed}>
                                                    
                                                    {
                                                        vacantPositions.map(( value , index)=>
                                                        <Dropdown.Item key={index} href="#/action-1">{value.p_position_title}</Dropdown.Item>
                                                        )
                                                    }
                                                </DropdownButton>
                                            
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    </Card>
                                </Col>
                               
                            </Row>
                          
                           
                            <br />
                            <hr />
                            <br />
                            <Row>
                                <Col>
                                    <div style={{padding:'15px'}}>
                                        <label className="text-left" style={{fontWeight:'bolder'}}>SELECT OFFICE</label>
                                            <br />  
                                            <Form.Select name="office" onChange={handleOfficeOnChange}>
                                            {
                                                office.map((value, index)=>
                                                <option key={index} value={value.off_id}>{value.off_office_name}</option>
                                                )
                                            }
                                            
                                        </Form.Select>
                                        <br />
                                        <br />
                                        <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Title</th>
                                                <th>Plantilla No.</th>
                                                <th>Salary Grade</th>
                                                <th>Posting { '&' } Closing Date</th>
                                                <th>Appointed</th>
                                            </tr>
                                        </thead> 
                                        <tbody>
                                            {
                                            positions.map((value, index) =>
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{value.p_position_title}</td>
                                                    <td>{value.p_plantilla_item_no}</td>
                                                    <td>{value.p_salary_grade}</td>
                                                    <td>{value.p_posting_date + ' to ' + value.p_closing_date}</td>
                                                    <td >{value.p_emp_id_appointed == 0 ? <p style={{color:'green'}}>Vacant</p> : <ConvertedEmployeeIdToName emp_id={value.p_emp_id_appointed}/> }</td>
                                                </tr>
                                            )
                                            }
                                        </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                            <br />  
                            
                        </div>
                    </Col>
                    <Col md="4">
                        <div style={{background:"white", padding:'15px'}}>
                            <h4>FEATURES</h4>
                            <br/>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="daterecieved" label="Starting Date">
                                        <Form.Control size='sm' type="date" placeholder="Starting Date" onChange={handleDateFromChange}  name="datereceived"   />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel controlId="daterecieved" label="End Date">
                                        <Form.Control size='sm' type="date" placeholder=" End Date" onChange={handleDateToChange}  name="datereceived"      />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <br/>
                            <Button variant="success" size="sm" onClick={submitDateFilter}>Filter</Button>
                            <br />
                            <br />  
                            <Card style={{ width: '100%' }}>
                                {/* <Card.Img variant="top" src={MaleFemle} /> */}
                                    <Card.Body>
                                        <Card.Title style={{fontWeight:'bolder'}}>APPLICANTS</Card.Title>
                                        <hr />
                                        <Row>
                                            <Col>
                                                <small className="text-left" style={{fontSize:'12px'}}>Total Applicants</small>
                                                <h1>{filteredApplicants}</h1>
                                                <small className="text-left" style={{fontSize:'25px'}}></small>

                                            </Col>
                                            {/* <Col>
                                                <small className="text-left" style={{fontSize:'12px'}}>Male <BsGenderMale style={{color:'green', fontSize:'25px'}} /></small>
                                                <h1 style={{color:'green'}}>60</h1>
                                                
                                            </Col>
                                            <Col>
                                            <small className="text-left" style={{fontSize:'12px'}}>Female <BsGenderFemale style={{color:'pink', fontSize:'25px'}} /></small>
                                                <h1 style={{color:'pink'}}>40</h1>
                                                
                                            </Col> */}
                                        </Row>
                                     </Card.Body>
                                    </Card>
                        </div>
                    </Col>
                </Row>

            </div>
            <br/>
            <GlobalFooter/>
        </Container>
    )
}

export default Dashboard