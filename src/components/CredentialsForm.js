import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import * as Network from '../api/Network';

export default function CredentialsForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const bannerText = props.isLogin ? "Log in to your account" : "Sign up for Toffeeblr";
  const buttonText = props.isLogin ? "Log In" : "Sign Up";

  const dispatch = useDispatch();


  function processInfo(){
    const data = {username: username, password: password}
    // useSignup(data); 
    // check for promise error, if success then reroute, otherwise show popup error message
    console.log("processing info: ");
    if (props.isLogin){
      Network.Login(data);
    }
    else{
      dispatch(Network.Signup2(data))
        .then(unwrapResult)
        .then(aUsername => {
          console.log("Promise returned: " + aUsername);
          // get redirect link from redux and render that
        })
        .catch(e => {
          console.log("Promise errored: " + JSON.stringify(e));
        });
    }
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

