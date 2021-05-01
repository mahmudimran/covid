import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Covid.css';

const Covid = (props) => {
    console.log(props.corona);
    const {country,active,cases,deaths,recovered,totalTests} = props.corona
    return (


       <Container>

           <div className="covid19">
                    <Card style={{ width: '18rem',marginBottom:'15px'}}>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="primary">Country : {country}</ListGroup.Item>
                            <ListGroup.Item>Cases : {cases}</ListGroup.Item>
                            <ListGroup.Item>Active :  {active}</ListGroup.Item>
                            <ListGroup.Item>Deaths: {deaths}</ListGroup.Item>
                            <ListGroup.Item>Recovered: {recovered}</ListGroup.Item>
                            <ListGroup.Item>Total Test : {totalTests}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                

        </Container>

        
    );
};

export default Covid;