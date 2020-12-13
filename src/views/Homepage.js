import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CredentialsForm from '../components/CredentialsForm';

export default function Homepage() {
  const [displayWelcome, setDisplayWelcome] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  function displaySignup(){
    setDisplayWelcome(false);
    setIsLogin(false);
  }

  function displayLogin(){
    setDisplayWelcome(false);
    setIsLogin(true);
  }

  function renderWelcome(){
    return (
      <Container>
        <h1 class="display-3">Welcome to Toffeeblr!</h1>
        <br/><br/>

        <Row className="justify-content-lg-center">
          <Col md={{ span: 4, offset: 0 }}>
            <Button onClick={displaySignup} size="lg" variant="success" block>
              Sign Up
            </Button>

            <br/>

            <Button onClick={displayLogin} size="lg" variant="primary" block>
              Log In
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div style={{ marginTop: "24vh" }}>
      { displayWelcome
        ? renderWelcome()
        : <CredentialsForm isLogin={isLogin}/>
      }
    </div>
  );
}

