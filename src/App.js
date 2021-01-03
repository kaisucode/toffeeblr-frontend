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
import Explore from './views/Explore';
import BlogProfile from './views/BlogProfile';
import Following from './views/Following';
import Followers from './views/Followers';

const animatedRoutes = [
  // { path: '/', name: 'Home', Component: Homepage, ExitAnimation: 'slide-left' },
  { path: '/', name: 'login', Component: Login, ExitAnimation: 'slide-left' },
  { path: '/signup', name: 'Sign up', Component: Signup, ExitAnimation: 'slide-left' }, 
  { path: '/login', name: 'Log in', Component: Login, ExitAnimation: 'slide-left' },
];

const exactRoutes = [
  { path: '/feed', name: 'Feed', Component: Feed }, 
  { path: '/explore', name: 'Explore', Component: Explore }, 
  { path: '/blog', name: 'Blog', Component: BlogProfile }, 
  { path: '/following', name: 'Following', Component: Following }, 
  { path: '/followers', name: 'Followers', Component: Followers }, 
];

const wildcardRoutes = [
  { path: '/blog/:username', name: 'Blog', Component: BlogProfile }, 
];

function App() {
  function renderAnimatedRoutes(){
    return (animatedRoutes.map(({ path, Component, ExitAnimation }) => (
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
    )));
  }

  function renderExactRoutes(){
    return (exactRoutes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        <Component />
      </Route>
    )));
  }

  function renderWildcardRoutes(){
    return (wildcardRoutes.map(({ path, Component, ExitAnimation }) => (
      <Route key={path} sensitive path={path}>
        <Component />
      </Route>
    )));
  }

  return (
    <div className="App">

      <Switch>
        <Route exact path="/login" render={() => (<ToffeeblrHeader isLogin={true} />)}></Route>
        <Route exact path="/signup" render={() => (<ToffeeblrHeader isLogin={false} />)}></Route>
        <Route exact path="/" render={() => (<ToffeeblrHeader emptyHeader={true} />)}></Route>
        <Route path="/" render={() => (<ToffeeblrHeader displayUserOptions={true} />)}></Route>
      </Switch>

      <Container> 
        <Row className="row">
          <Col xs={12}>
            { renderAnimatedRoutes() }
            { renderExactRoutes() }
            { renderWildcardRoutes() }
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
