import React from "react";
 
 import axios from 'axios';
import {Container,Row,Col,Card} from 'react-bootstrap'
const url=`https://jsonplaceholder.typicode.com/photos?_start=0&_end=20 `
  /*import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import  Card from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button' */
export default class ReactBootstrap extends React.Component{

    constructor(props){

        super(props)
        this.state ={

            photos:[]
        }
    }
    render()
{
       
     
    
return(<>
<div className="container text-center">
    <h2>REACT BOOTSTRAP UI PACKAGE</h2>
    <Container>
        <Row>
           {
               this.state.photos.map((res,i) =>{
                   return(<Col lg={4} md={4} sm={6} xs={12}>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={res.thumnailurl} />
  <Card.Body>
    <Card.Title>{res.title}</Card.Title>
     
    <a variant="primary" href={res.url} target="_blank">Visit site</a>
  </Card.Body>
</Card>
                    
                    
                    </Col>)
               })
           }
        </Row>
    </Container>
    </div></>)

}

    
        

        componentDidMount(){  axios.get(url).then((result)=> this.setState({photos:result.data}));}
}