import React from 'react';
import { useParams } from 'react-router';


const BasicUserInfoComponent = () => {

    const { emp_id } = useParams();
    

    return (
        <h1>Basic User Info</h1>
    )
}

export default BasicUserInfoComponent