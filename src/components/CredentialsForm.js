import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function CredentialsForm(props) {
  return (
    <Container>
      <Form>
        <Row className="justify-content-md-center">
          <Col md={{ span: 4, offset: 0 }}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={{ span: 4, offset: 0 }}>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={{ span: 4, offset: 0 }}>
            <NavLink to="/login">
              <Button variant="primary" block>

                { props.isLogin
                  ? <div>Log In</div>
                  : <div>Sign Up</div>
                }

              </Button>
            </NavLink>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

