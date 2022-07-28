import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ConvertedEmployeeIdToName = (props) => {

    const [ emp, setEmp ] = useState([{}]);

    useEffect(()=>{

        let emp_info = {
            emp_id : props.emp_id
        }
        axios.post('http://localhost:80/hraid_api/get_user_profile.php', emp_info )
        .then(function (response) {

            
            if(response.data == null)
            {
                setEmp({
                    emp_firstname: ' ',
                    emp_middlename: ' ',
                    emp_lastname: ' ',
                    emp_suffix: ' ',
                })
            }
            else
            {
                let data = response.data;
                setEmp(data[0]);
            }
        
        })


    },[])

    return (
        <div>{emp.emp_firstname + ' '  + emp.emp_middlename + ' ' + emp.emp_lastname + ' ' + emp.emp_suffix}</div>
    )
}

export default ConvertedEmployeeIdToName;