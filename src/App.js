import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './views/Homepage';

import { Container, Col, Row } from 'react-bootstrap';
import ToffeeblrHeader from './components/ToffeeblrHeader';
import './styles/App.scss';

const routes = [
  { path: '/', name: 'Home', Component: Homepage }
]

function App() {
  return (
    <div className="App">

      <ToffeeblrHeader />
      <Container>
        <Row className="row">
          <Col xs={12}>

            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}

          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
