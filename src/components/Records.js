import React from 'react'
import GlobalNavigation from './GlobalNavigation'
import GlobalFooter from './GlobalFooter'
import DataTable from 'react-data-table-component'
import { Container, Row, Col, FloatingLabel, Form, Button  } from 'react-bootstrap'


import MyImage from '../img/User-avatar.png';


const Records = () => {

    const columns = [
        {
            name: 'Pictures',
            width:'100px',
            cell: () => (
                <img src={MyImage} />
            )
            
        },
        {
            name: 'Name',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'Options',
            width:'100px',
            cell : () => (
                <div >
                    <Button className='color-white' variant="success"  size="sm">
                        Update
                    </Button>
                </div>
            )
        }
    ];
    
    const data = [
        {
            id: 1,
            year: 'Juan Dela Cruz',
        },
        {
            id: 2,
            year: 'Juan Dela Cruz',
        },
        {
            id: 1,
            year: 'Juan Dela Cruz',
        },
        {
            id: 2,
            year: 'Juan Dela Cruz',
        },
        {
            id: 1,
            year: 'Juan Dela Cruz',
        },
        {
            id: 2,
            year: 'Juan Dela Cruz',
        },

        {
            id: 1,
            year: 'Juan Dela Cruz',
        },
        {
            id: 2,
            year: 'Juan Dela Cruz',
        },
    ]
    

    return (
        <Container>

            <GlobalNavigation/>
            <br/>
            <Row>
                <Col>
                    <div className='records-container'>
                        
                        <Row>
                            <Col>
                                <h2 style={{textAlign:"left"}}>RECORDS</h2>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="search" label="Search.....">
                                    <Form.Control size='sm' type="text" placeholder="Search....." />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <br/>
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination={true}
                            pointerOnHover={true}
                            responsive={true}
                            striped={true}
                        />
                       
                    </div>
                </Col>
            </Row>
            <br/>
            <GlobalFooter/>
            
        </Container>
    )
}

export default Records