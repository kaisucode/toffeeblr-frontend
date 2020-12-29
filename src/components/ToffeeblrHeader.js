import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, 
  Form, FormControl, Button 
} from 'react-bootstrap';
import NewPost from 'components/NewPost';

export default function ToffeeblrHeader(props) {
  const [modalShow, setModalShow] = useState(false);

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

  function renderUserOptions(){
    return (
      <Nav className="ml-auto">
        <Nav.Link href="feed">Feed</Nav.Link>
        <Nav.Link href="#explore">Explore</Nav.Link>
        <Nav.Link href="#inbox">Inbox</Nav.Link>
        <Nav.Link href="#notifs">Notifs</Nav.Link>
        <NavDropdown title="Account" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Likes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Following</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Posts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Followers</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={() => setModalShow(true)}>New Post</Nav.Link>
      </Nav>
    );
  }

  return (
    <React.Fragment>
      <div className="border-bottom border-light">
        <Navbar collapseOnSelect className="mx-5 my-1" variant="dark" expand="lg">

          <Navbar.Brand href="/">Toffeeblr</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="ml-2" />
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            { props.emptyHeader || 
                (props.displayUserOptions) ? renderUserOptions() : renderOtherButton()
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
};

ToffeeblrHeader.defaultProps = {
  emptyHeader: false, 
  displayUserOptions: false, 
};

