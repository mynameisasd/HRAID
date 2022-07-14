import React, { useEffect, useState } from 'react';
import { Container, Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import GlobalFooter from './GlobalFooter';
import GlobalNavigation from './GlobalNavigation';
import axios from 'axios';
import EmployeeBasicInfo from './EmployeeBasicInfo';


const UploadPDFFile = () => {

    const { emp_id } = useParams();
    const [ pdf, setPdf ] = useState();    
    const navigate = useNavigate();
    const [ date, setDate ] = useState('');
    const [ remarks, setRemarks ] = useState('');
    const [ pdfInfo, setPdfInfo ] = useState([]);

    function handleOnChange(e){
        setPdf(e.target.files[0]);
    }

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleRemarksChange(e){
        setRemarks(e.target.value);
    }


    function uploadFile()
    {
        let file = pdf;
        let formdata = new FormData();
        
        formdata.append('pdf', file);
        formdata.append('emp_id', emp_id);
        formdata.append('date', date);
        formdata.append('remarks', remarks)
        console.log(formdata)
            
        axios.post('http://localhost:80/hraid_api/upload_pdf.php', formdata )
            .then(function (response) {

            alert('File Uploaded')
            navigate('/profile/' + emp_id);
            console.log(response.data);
            
      
        });

     
    }

    useEffect(()=>{

        axios.post('http://localhost/hraid_api/get_pdf.php', {
        emp_id: emp_id,
        }).then(function (response) {

            let arr = response.data;
            setPdfInfo(arr);

        });

    },[])


    function deletePDFFile(pdfName){

        axios.post('http://localhost/hraid_api/delete_pdf.php', {
        emp_id: emp_id, 
        pdf_pdf_name: pdfName
        }).then(function (response) {

            let arr = response.data;
            setPdfInfo(arr);
         

        });
    }

    return (
        <Container>
            <GlobalNavigation/>
            <br/>
            <EmployeeBasicInfo emp_id={emp_id}/>
            <br/>
            <Row>
                <Col>
                    <div style={{background:'#eee', padding:'15px'}}>
                        
                        <br/>
                        <br/>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Control type="file" size="sm" name="image" onChange={handleOnChange} />
                        </Form.Group>
                        <br/>
                        <FloatingLabel controlId="daterecieved" label="Date Recieved">
                            <Form.Control size='sm' type="date" placeholder="Date" name="datereceived" onChange={handleDateChange} required />
                        </FloatingLabel>
                        <br />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control placeholder='Remarks' as="textarea" rows={3} onChange={handleRemarksChange} />
                        </Form.Group>

                        <Button variant="success" size="sm" onClick={uploadFile}>Upload</Button>
                        <br/>
                        <br/>
                        <i style={{color:'red',fontSize:'12px'}}>Note! Please name the PDF File a unique name, if file did'nt upload try to rename the file. </i>
                        <br/>
                    </div>
                </Col>

                <Col>
                    <div style={{background:"#eee", padding:'15px'}}>
                        <h4>FILES</h4>
                        <ul>
                            {
                                pdfInfo.map((value, index) =>
                                    <li key={index}>
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
                                                    <br />
                                                    <br />
                                                    <Button variant="danger" size="sm" onClick={()=> deletePDFFile(value.pdf_pdf_name)}>REMOVE</Button>
                                            </Col>
                                        </Row>
                                        <hr/>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </Col>
            </Row>

            
            <br/>
            <GlobalFooter/>
        </Container>
    )
}


export default UploadPDFFile;