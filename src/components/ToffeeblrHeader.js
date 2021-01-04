import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername, selectFollowerCount, selectFollowingCount, selectFollowing } from 'store/slices/userDataSlice';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import NewPost from 'components/NewPost';

import * as Network from 'api/Network';

export default function ToffeeblrHeader(props) {
  const match = useRouteMatch('/blog/:username');
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const followerCount = useSelector(selectFollowerCount);
  const followingCount = useSelector(selectFollowingCount);
  const following = useSelector(selectFollowing);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(Network.GetSelfContent());
    dispatch(Network.GetRelationshipData());
  }, []);

  function followUser(){
    if (match){
      dispatch(Network.FollowUser(match.params.username));
    }
  }

  function unfollowUser(){
    if (match){
      dispatch(Network.UnfollowUser(match.params.username));
    }
  }

  function renderOtherButton(){
    var link, text;
    if (props.isLogin) {
      link = "/signup";
      text = "Sign Up";
    }
    else{
      link = "/login";
      text = "Log In";
    }
    return (
      <Nav className="ml-auto">
        <NavLink to={ link }>
            <Button variant="primary" block>
              { text }
            </Button>
          </NavLink>
      </Nav>
    );
  }

  function renderFollowButton(){
    var text;
    var func;
    if (following.includes(match.params.username)){
      text = "Unfollow";
      func = unfollowUser;
    }
    else{
      text = "Follow";
      func = followUser;
    }

    return (
      <Button variant="outline-success" 
        className="ml-3"
        onClick={func} > 
        {text}
      </Button>
    )
  }

  function renderUserOptions(){
    return (
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/feed">Feed</Nav.Link>
        <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
        <Nav.Link href="#inbox">Inbox</Nav.Link>
        <Nav.Link href="#notifs">Notifs</Nav.Link>
        <NavDropdown title="Account" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Likes</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/following" className="d-flex justify-content-between">
            <div> Following </div>
            <div> {followingCount} </div>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item as={NavLink} to={`/blog/${username}`}>
            <b>{username}</b>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Posts</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/followers" className="d-flex justify-content-between">
            <div> Followers </div>
            <div> {followerCount} </div>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={() => setModalShow(true)}>New Post</Nav.Link>

        { props.isBlogProfile &&
            renderFollowButton()
        }
      </Nav>
    );
  }

  return (
    <React.Fragment>
      <div className="border-bottom border-light mb-5">
        <Navbar collapseOnSelect className="mx-5 my-1" variant="dark" expand="lg">

          <Navbar.Brand href="/">Toffeeblr</Navbar.Brand>
          <Form inline> <FormControl type="text" placeholder="Search" className="ml-2" /> </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            { props.emptyHeader || 
                (props.displayUserOptions ? renderUserOptions() : renderOtherButton())
            }
          </Navbar.Collapse>
        </Navbar>
      </div>

      <NewPost modalShow={modalShow} onHide={() => setModalShow(false)}/>
    </React.Fragment>
  );
}

ToffeeblrHeader.propTypes = {
  emptyHeader: PropTypes.bool.isRequired, 
  displayUserOptions: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool, 
  isBlogProfile: PropTypes.bool, 
};

ToffeeblrHeader.defaultProps = {
  emptyHeader: false, 
  displayUserOptions: false, 
  isBlogProfile: false, 
};

