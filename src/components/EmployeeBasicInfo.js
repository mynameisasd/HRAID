import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import MyImage from '../img/User-avatar.png';




const EmployeeBasicInfo = (props) => {

    const [ userInfo, setUserInfo ] = useState([{}]);

    axios.post('http://localhost/hraid_api/get_user_profile.php', {
        emp_id : props.emp_id,
        }).then(function (response) {

            let arr = response.data;
            setUserInfo(arr[0]);
        
        });

    return (
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
    )
}

export default EmployeeBasicInfo;