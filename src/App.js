import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';

import { Container, Button, Col, Row } from 'react-bootstrap';
import Navigation from './components/Navigation'
import ToffeeblrHeader from './components/ToffeeblrHeader';

function App() {
  return (
    <div className="App">

      <ToffeeblrHeader />
      {
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
      }

      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Welcome to Toffeeblr!</h1>

            <Navigation />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
