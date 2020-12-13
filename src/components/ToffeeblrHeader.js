import React from 'react';
import { 
  Navbar, Nav, NavDropdown, 
  Form, FormControl,
  Container, Button 
} from 'react-bootstrap';

export default function ToffeeblrHeader() {
  return (
    <div className="border-bottom border-light">
      <Navbar collapseOnSelect className="mx-5 my-1" variant="dark" expand="lg">

        <Navbar.Brand href="/">Toffeeblr</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="ml-2" />
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#feed">Feed</Nav.Link>
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
            <Nav.Link href="#newpost">New Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <br style={{color: "#4b4339" }}/>
      </Navbar>
    </div>
  );
}

