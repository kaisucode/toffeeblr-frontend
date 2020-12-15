import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CenteredDiv from '../components/CenteredDiv';

export default function Homepage() {
  return (
    <CenteredDiv>

      <Container>
        <h1 className="display-3">Welcome to Toffeeblr!</h1>
        <br/><br/>

        <Row className="justify-content-lg-center">
          <Col md={{ span: 4, offset: 0 }}>

            <NavLink to="/signup">
              <Button variant="success" block>
                Sign Up
              </Button>
            </NavLink>

            <br/>

            <NavLink to="/login">
              <Button variant="primary" block>
                Login
              </Button>
            </NavLink>

          </Col>
        </Row>
      </Container>

    </CenteredDiv>
  );
}

