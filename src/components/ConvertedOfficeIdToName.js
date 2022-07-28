import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ConvertedOfficeIdToName = (props) => {

    const [ office, setOffice ] = useState([{}]);



        let office_id = {
            office_id : props.office_id
        }
        axios.post('http://localhost:80/hraid_api/get_office_name_using_id.php', office_id )
        .then(function (response) {

            let data = response.data;
            setOffice(data[0]);
        
        })


    return (
        <div>{office.off_office_name} </div>
    )
}

export default ConvertedOfficeIdToName;