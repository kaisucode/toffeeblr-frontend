import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles/App.scss';
import './styles/Animations.scss';

import { Container, Col, Row } from 'react-bootstrap';
import ToffeeblrHeader from './components/ToffeeblrHeader';

import Homepage from './views/Homepage';
import Signup from './views/Signup';
import Login from './views/Login';

const routes = [
  { path: '/', name: 'Home', Component: Homepage },
  { path: '/signup', name: 'Sign up', Component: Signup }, 
  { path: '/login', name: 'Log in', Component: Login }
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
                {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames='magnify'
                      unmountOnExit
                    >
                      <Component />
                    </CSSTransition>
                )}
              </Route>
            ))}

          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
