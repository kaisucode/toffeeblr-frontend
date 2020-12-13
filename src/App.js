import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './views/Homepage';
import Login from './views/Login';
import Signup from './views/Signup';

import { Container, Button, Col, Row } from 'react-bootstrap';
import ToffeeblrHeader from './components/ToffeeblrHeader';
import './styles/App.scss';

function App() {
  return (
    <div className="App">

      <ToffeeblrHeader />
      <Container>
        <Row className="row">
          <Col xs={12}>

            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />

          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
