import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ConvertedPositionIdtoName = (props) => {

    const [ position, setPosition ] = useState('');

    useEffect(()=>{

        let office_id = {
            position_id : props.position_id
        }
        axios.post('http://localhost:80/hraid_api/get_position_name_using_id.php', office_id )
        .then(function (response) {

            let data = response.data;
            setPosition(data[0]);
        
        })

    },[])

    return (
        <div>{position.p_position_title}</div>
    )
}

export default ConvertedPositionIdtoName;