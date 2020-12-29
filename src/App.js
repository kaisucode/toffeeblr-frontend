import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './styles/App.scss';
import './styles/Animations.scss';

import { Container, Col, Row } from 'react-bootstrap';
import ToffeeblrHeader from './components/ToffeeblrHeader';

import Homepage from './views/Homepage';
import Signup from './views/Signup';
import Login from './views/Login';
import Feed from './views/Feed';

const routes = [
  { path: '/', name: 'Home', Component: Homepage, ExitAnimation: 'slide-left' },
  { path: '/signup', name: 'Sign up', Component: Signup, ExitAnimation: 'slide-left' }, 
  { path: '/login', name: 'Log in', Component: Login, ExitAnimation: 'slide-left' },
  { path: '/feed', name: 'Feed', Component: Feed, ExitAnimation: '' }
]

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/login" render={() => (<ToffeeblrHeader isLogin={true} />)}></Route>
        <Route exact path="/signup" render={() => (<ToffeeblrHeader isLogin={false} />)}></Route>
        <Route exact path="/" render={() => (<ToffeeblrHeader emptyHeader={true} />)}></Route>
        <Route path="/" render={() => (<ToffeeblrHeader displayUserOptions={true} />)}></Route>
      </Switch>


      <Container> <Row className="row">
        <Col xs={12}>
          {routes.map(({ path, Component, ExitAnimation }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames={ExitAnimation}
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
