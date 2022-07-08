import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import GlobalFooter from './GlobalFooter';
import GlobalNavigation from './GlobalNavigation';



const UserDeleteConfirmation = () => {

    const { emp_id } = useParams();
    const [ userInfo, setUserInfo ] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

        axios.post('http://localhost/hraid_api/get_user_profile.php', {
        emp_id: emp_id,
        }).then(function (response) {

            let arr = response.data;
            setUserInfo(arr[0]);
        
        });

    },[])


    function deleteConfirm (){

        axios.post('http://localhost/hraid_api/delete_user.php', {
            emp_id: emp_id,
            }).then(function (response) {

                alert("Data Deleted")
                navigate('/records');   


            });
    }

    return (
        <Container>
            <GlobalNavigation />
                <br/>
                    <h2>Are you sure you want to Delete</h2>

                    <div style={{textAlign:'center', padding:'15px', border:'1px solid black'}} >
                        <b><h4>{ userInfo.emp_firstname + ' '  + userInfo.emp_middlename + ' ' + userInfo.emp_lastname + ' ' + userInfo.emp_suffix }</h4></b>
                        <p>{ userInfo.emp_address }</p>
                        <p>{ userInfo.emp_emailaddress }</p>
                        <p>{ userInfo.emp_contactnumber }</p>
                    </div>
                <br/>
                <br/>
                    <Button variant="danger" size="sm" onClick={deleteConfirm}>YES</Button>
                <br/>
                <br/>
            <GlobalFooter />
        </Container>
    )
}

export default UserDeleteConfirmation;