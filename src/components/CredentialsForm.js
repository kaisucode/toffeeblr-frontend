import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { selectStatus, selectAuthState } from 'store/slices/userDataSlice';
import { Redirect } from "react-router-dom";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import * as Network from 'api/Network';

export default function CredentialsForm(props) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const authState = useSelector(selectAuthState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const bannerText = props.isLogin ? "Log in to your account" : "Sign up for Toffeeblr";
  const buttonText = props.isLogin ? "Log In" : "Sign Up";

  function processInfo(){
    if (username.length > 20 || username === "" || password.length > 20 || password.length < 3){
      console.log("incorrect lengths");
      return;
    }

    const data = { username: username, password: password };
    props.isLogin ? dispatch(Network.Login(data)) : dispatch(Network.Signup(data));
  }

  function renderStatus(){
    if (status === 401){
      return "Username or password incorrect";
    }
    else if (status === 409){
      return "Username already exists";
    }
    else if (status === 200){
      if (authState === 1){
        return (<Redirect to={'/feed'} />);
      }
      else if (authState === 0 && !props.isLogin){
        return "Signup Successful!!";
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

