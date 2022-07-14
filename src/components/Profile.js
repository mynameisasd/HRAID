import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import GlobalFooter from './GlobalFooter'
import GlobalNavigation from './GlobalNavigation'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import MyImage from '../img/User-avatar.png';
import GlobalAssestmentTable from './GlobalAssestmentTable';

const Profile = (props) => {

    const { emp_id } = useParams();
    const [ userInfo, setUserInfo ] = useState([]); 
    const [ userDesiredPosition, setUserDesiredPosition ] = useState([]);
    const [ userEligibility, setUserEligibility ] = useState([]);
    const [ userTraining, setUserTraining ] = useState([]);
    const [ pdf, setPdf ] = useState([{}]) 

    useEffect(()=>{ 

        axios.post('http://localhost/hraid_api/get_user_profile.php', {
        emp_id: emp_id,
        }).then(function (response) {

            let arr = response.data;
            setUserInfo(arr[0]);
        
        });

        axios.post('http://localhost/hraid_api/get_desired_position.php', {
        emp_id: emp_id,
        }).then(function (response) {

            let arr = response.data;
            setUserDesiredPosition(arr);
        
        });

        axios.post('http://localhost/hraid_api/get_eligibility.php', {
        emp_id: emp_id,
        }).then(function (response) {

            let arr = response.data;
            setUserEligibility(arr);
        });
    
        axios.post('http://localhost/hraid_api/get_training.php', {
        emp_id: emp_id,
        }).then(function (response) {

            let arr = response.data;
            setUserTraining(arr);
        });

        axios.post('http://localhost/hraid_api/get_pdf.php', {
        emp_id: emp_id,
        }).then(function (response) {

            let arr = response.data;
            setPdf(arr);

        });



    },[])


    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <div className='profile-container'>
                <Row className='r-pad-marg' style={{background:'white',}}>
                    <Col md="2">
                        {
                            userInfo.emp_profile_picture != '' ? <img src={'http://localhost:80/hraid_api/upload_pictures/' + userInfo.emp_profile_picture } alt="Profile Picture" /> : <img src={MyImage} alt="Profile Picture" />
                        }
                    </Col>
                    <Col md="10">
                        <div style={{textAlign:'left', padding:'15px'}} >
                            <b><h4>{ userInfo.emp_firstname + ' '  + userInfo.emp_middlename + ' ' + userInfo.emp_lastname + ' ' + userInfo.emp_suffix }</h4></b>
                            <p>{ userInfo.emp_address }</p>
                            <p>{ userInfo.emp_emailaddress }</p>
                            <p>{ userInfo.emp_contactnumber }</p>
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md="8">
                        <div style={{background:'white', padding:'15px'}}>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                    Date Application Received:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    {userInfo.emp_datereceived}
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                    Birthday:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    {userInfo.emp_birthday}
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                    Gender:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    {userInfo.emp_gender}
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                    Religion:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    {userInfo.emp_religion}
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Highest Educational Attainment:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    {userInfo.highesteducationalattainment}
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Desired Position:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    <small style={{color:'red', font:'8px'}}><i>Note: Once the Position is assest it cant be altered anymore, please contact the developer</i></small>
                                    <ul>
                                        {
                                            userDesiredPosition.map((value, index) =>
                                                <li key={index}>
                                                    <div style={{padding:'15px'}}>
                                                        {value.dp_position}

                                                        <Button style={{float:'right'}} variant="success" size="sm">
                                                            <Link className="text-white" to={ "/assestment/" + userInfo.emp_id + "/" + value.dp_id + '/' + value.dp_position}>Assestment</Link>
                                                        </Button>
                                                    </div>
                                                    <GlobalAssestmentTable 
                                                        dp_id={value.dp_id} 
                                                        emp_id={emp_id}  
                                                        />
                                                    <hr/>
                                                </li>
                                          )
                                        }
                                    </ul>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Eligibility:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    <ul>
                                       {
                                        userEligibility.map((value, index)=>
                                            <li key={index}>{value.eli_eligibility}</li>
                                        )
                                       }
                                    </ul>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Training:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    <ul>
                                        {
                                            userTraining.map((value, index) =>
                                                <li key={index}>{value.trai_training}</li>
                                            )
                                        }
                                    </ul>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Experience <i>No. of Years</i>:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    {userInfo.emp_experience }
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md="4" style={{textAlign:'right'}}>
                                   Data on Person with Disability:
                                </Col>
                                <Col md="8" style={{textAlign:'left'}}>
                                    {userInfo.emp_dataonpersonwithdisability}
                                </Col>
                            </Row>

                            <hr/>

                            <Row>
                                <Col>
                                <h3>Files</h3>
                                <hr />
                                    <ul>
                                        {
                                            pdf.map((value, index)=>
                                                <li key={index}>
                                                    <div>
                                                       <Row>
                                                            <Col style={{textAlign:'right'}}>Date:</Col>
                                                            <Col style={{textAlign:'left'}}>{value.pdf_date}</Col>
                                                       </Row>
                                                       <Row>
                                                            <Col style={{textAlign:'right'}}>Remarks:</Col>
                                                            <Col style={{textAlign:'left'}}>{value.pdf_remarks}</Col>
                                                       </Row>
                                                       <Row>
                                                            <Col style={{textAlign:'right'}}>File:</Col>
                                                            <Col style={{textAlign:'left'}}>
                                                              
                                                                    <a href={"http://localhost/hraid_api/upload_pdf/" + value.pdf_pdf_name } target="_blank"> {value.pdf_pdf_name}</a>
                                                            </Col>
                                                       </Row>
                                                    </div>
                                                    <hr/>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md="4">
                        <div style={{background:'white',padding:'15px'}}>

                            <h4>Settings</h4>
                            <hr/>
                            <div style={{display:'inline-grid'}}>
                               
                                <br/>
                                <Button variant="info" size="sm">
                                    <Link className="text-white" to={ "/uploadpp/" + userInfo.emp_id}>Upload Picture</Link>
                                </Button>
                                <br/>
                                <Button variant="info" size="sm">
                                    <Link className="text-white" to={ "/uploadpdf/" + userInfo.emp_id}>Upload PDF File</Link>
                                </Button>
                                <br/>
                                <Button variant="info" size="sm">
                                    <Link className="text-white" to={ "/editemployee/" + userInfo.emp_id}>Update Profile</Link>
                                </Button>
                                <br/>
                                <hr/>
                                <br/>
                                <Button variant="danger" size="sm">
                                    <Link className="text-white" to={ "/delete/" + userInfo.emp_id}>Delete</Link>
                                </Button>
                                
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </div>

            <GlobalFooter/>
        </Container>
    )
}


export default Profile