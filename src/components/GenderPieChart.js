import React from 'react'
import { VictoryPie } from 'victory';
import { BsFillCircleFill } from "react-icons/bs";

const GenderPieChart = () => {

    
    return (
        <div>
            
            {/* <span><BsFillCircleFill />  Male </span>
            <span><BsFillCircleFill />  Female </span> */}

            <br/>
             <VictoryPie
                colorScale={["pink", "green",  ]}
                data={[
                    { x: "Female", y: 40 },
                    { x: "Male", y: 55 }
                ]}
            />
        </div>
       

    )
}


export default GenderPieChart