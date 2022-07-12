import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import GlobalFooter from './GlobalFooter';
import GlobalNavigation from './GlobalNavigation';
import axios from 'axios';
import EmployeeBasicInfo from './EmployeeBasicInfo';


const UploadProfilePicture = () => {

    const { emp_id } = useParams();
    const [ image, setImage ] = useState();    
    const navigate = useNavigate();

    function handleOnChange(e){
        setImage(e.target.files[0]);
    }


    function uploadFile()
    {
        let file = image;
        let formdata = new FormData();
        
        formdata.append('image', file);
        formdata.append('emp_id', emp_id);
        console.log(formdata)
            
        axios.post('http://localhost:80/hraid_api/upload_picture.php', formdata )
            .then(function (response) {
                
            alert("File Uploaded");
            navigate('/profile/' + emp_id);
            
        });

     
    }

    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <EmployeeBasicInfo emp_id={emp_id} />
            <br/>
            <br/>
            <br/>
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Control type="file" size="sm" name="image" onChange={handleOnChange} />
            </Form.Group>
            <Button variant="success" size="sm" onClick={uploadFile}>Upload</Button>
            <br/>
            <br/>
            <GlobalFooter/>
        </Container>
    )
}


export default UploadProfilePicture;