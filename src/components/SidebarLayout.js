import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function SidebarLayout(props){
  return (
    <Container>
      <Row>
        <Col md="1" /> 
        <Col md="7">
          { props.children }
        </Col>
        <Col md="4" className="d-none d-sm-block">
          <h4 className="display-6"> Check out these!! </h4> 
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          On your radar...
        </Col>
      </Row>
    </Container>
  );
}
