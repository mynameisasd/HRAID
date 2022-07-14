import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios'
import { useParams } from 'react-router';
import { BsFillCheckCircleFill } from "react-icons/bs";


const GlobalAssestmentTable = (props) => {

    const [ assestment, setAssestment ] = useState([{}]);

    useEffect(() =>{

        let pass_id = {
            emp_id: props.emp_id,
            dp_id: props.dp_id
        }


        axios.post('http://localhost/hraid_api/get_assestment.php', pass_id 
        ).then(function (response) {

            setAssestment(response.data);
           
        });

    },[])   

    return (
        <div>
            <Table style={{textAlign:'center'}} striped bordered hover>
                <thead >
                    <tr>
                        <th>IA</th>
                        <th>TE</th>
                        <th>PE</th>
                        <th>TI</th>
                        <th>RM</th>
                        <th>IA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        assestment.map((value, index)=>
                        <tr key={index}>
                            <td>
                                {value.ass_initial_assestment == 'passed' ?  <BsFillCheckCircleFill style={{color:'green'}} /> : ''} 
                            </td>
                            <td>
                                {value.ass_took_the_exam  == 'passed' ?  <BsFillCheckCircleFill style={{color:'green'}} /> : ''}  
                            </td>
                            <td>
                                {value.ass_passed_the_exam  == 'passed' ?  <BsFillCheckCircleFill style={{color:'green'}} /> : ''}
                            </td>
                            <td>
                                {value.ass_took_the_interview  == 'passed' ?  <BsFillCheckCircleFill style={{color:'green'}} /> : ''}
                            </td>
                            <td>
                                {value.ass_recommended_to_mayor  == 'passed' ?  <BsFillCheckCircleFill style={{color:'green'}} /> : ''}
                            </td>
                            <td>
                                {value.ass_issued_appointment  == 'passed' ?  <BsFillCheckCircleFill style={{color:'green'}} /> : ''}
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default GlobalAssestmentTable;