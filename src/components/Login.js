import React, {  useState, useEffect } from 'react'
import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import MyImage from '../img/HR LOGO.png';



const Login = () =>{

    const cookies = new Cookies();

    const navigate = useNavigate();

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }


    function login(){

        axios.post('http://localhost:80/hraid_api/login.php', {
            username: username,
            password: password
            })
            .then(function (response) {
 
                let userCredentials = response.data;
                if(userCredentials[0].user_username == username && userCredentials[0].user_password == password )
                {
                    cookies.set('isLogin', true);
                    setUsername('');
                    setPassword('');
                    navigate('/dashboard');
                    
                }
                else
                {
                    alert('try again');
                    setUsername('');
                    setPassword('');
                }
            
            })
            .catch(function (error) {
            console.log(error);
            });
    
    }

 
    // useEffect(() => {

    //     axios.get('http://localhost/hraid_api/get_user_info.php')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response.data);
    //     });

    // },[]);

     
   

    return (
        <Container>
            <br/>
            <h1>Human Resource Applicant Information Database</h1>
            <br/>
            <img src={MyImage} alt="hr logo" />
            <br/>
            <Row>
                <Col md="4" xs="12" sm="12"></Col>
                <Col md="4" xs="12" sm="12">
                    
                    <div className="login-parent">
                        <>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                            </FloatingLabel>

                            <FloatingLabel controlId="password" label="Password">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </FloatingLabel>
                            <br/>
                            <button style={{color:"white"}} type="button" class="btn btn-info" onClick={login}>LOGIN</button>
                        </>
                    </div>
                </Col>
                <Col md="4" xs="12" sm="12"></Col>
                
                
            </Row>
            <br/>
            <Row>
                <span style={{fontSize:"12px", color:"red"}}><i>Note! For new user please contact system administrator</i></span>
            </Row>
            
        </Container>
        
    )
}


export default Login