import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { selectSignupStatus, selectLoginStatus } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function CredentialsForm(props) {
  const dispatch = useDispatch();
  const signUpStatus = useSelector(selectSignupStatus);
  const loginStatus = useSelector(selectLoginStatus);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const bannerText = props.isLogin ? "Log in to your account" : "Sign up for Toffeeblr";
  const buttonText = props.isLogin ? "Log In" : "Sign Up";

  function processInfo(){
    if (username.length > 20 || username === "" || password.length > 20 || password.length < 3){
      console.log("incorrect lengths");
      return;
    }

    const data = {username: username, password: password}
    if (props.isLogin){
      dispatch(Network.Login(data));
    }
    else{
      dispatch(Network.Signup(data));
    }
  }

  function renderStatus(){
    if (props.isLogin) {
      if (loginStatus === 1){
        return "Login Successful!!";
      }
      else if (loginStatus === 2){
        return "Username or password incorrect";
      }
    }
    else{
      if (signUpStatus === 1){
        return "Signup Successful!!";
      }
      else if (signUpStatus === 2){
        return "Username already exists";
      }
    }
  }

  return (
    <Container>
      <h1 className="display-4">{bannerText}</h1>
      <br/>

      <h1 className="display-1">{renderStatus()}</h1>

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

