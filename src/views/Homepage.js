import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Form, 
  Button, 
  Container, 
  Row, 
  Col 
} from 'react-bootstrap';

export default function Homepage() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", width: "100%" }}>
      <Container>
        <h1 class="display-3">Welcome to Toffeeblr!</h1>
        <br/><br/>

        <Row className="justify-content-lg-center">
          <Col md={{ span: 4, offset: 0 }}>
            <NavLink to="/signup">
              <Button size="lg" variant="success" block>
                Sign Up
              </Button>
            </NavLink>

            <br/>

            <NavLink to="/login">
              <Button size="lg" variant="primary" block>
                Log In
              </Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



