import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import * as Network from '../api/Network';

export default function CredentialsForm(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const bannerText = props.isLogin ? "Log in to your account" : "Sign up for Toffeeblr";
  const buttonText = props.isLogin ? "Log In" : "Sign Up";

  function processInfo(){
    const data = {username: username, password: password}
    // check for promise error, if success then reroute, otherwise show popup error message
    if (props.isLogin){
      Network.Login(data);
    }
    else{
      dispatch(Network.Signup(data))
        .then(unwrapResult)
        .then(result => {
          console.log("Promise returned: ");
          console.log(JSON.stringify(unwrapResult(result)));
          // get redirect link from redux and render that
          setSignUpSuccess(false);
        })
        .catch(e => {
          console.log("Promise errored: " + JSON.stringify(e));
          setSignUpSuccess(true);
        });
    }
  }

  return (
    <Container>
      <h1 className="display-4">{bannerText}</h1>
      <br/>

      {signUpSuccess && 
      <h1 className="display-1">SIGN UP WORKED!!! AYYYYOOOOOO</h1>
      }

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

