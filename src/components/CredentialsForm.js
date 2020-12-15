import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import * as Network from '../api/Network';

import { useSelector, useDispatch } from 'react-redux';
import { setStoredUsername, selectUserdata } from '../store/userdata/userdataSlice';

export default function CredentialsForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const bannerText = props.isLogin ? "Log in to your account" : "Sign up for Toffeeblr";
  const buttonText = props.isLogin ? "Log In" : "Sign Up";

  const dispatch = useDispatch();
  const userdata = useSelector(selectUserdata);

  function processInfo(){
    Network.Login(username, password);
    dispatch(setStoredUsername(username));
  }

  return (
    <Container>
      <h1 className="display-4">{bannerText}</h1>
      <br/>

      <Form>
        <Row className="justify-content-md-center">
          <Col md={{ span: 4, offset: 0 }}>

            <Form.Group controlId="formBasicUsername">
              <Form.Control 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password" />
            </Form.Group>

            <Button onClick={processInfo} variant="primary" block>
              {buttonText}
            </Button>

          </Col>
        </Row>
      </Form>
    </Container>
  );
}
