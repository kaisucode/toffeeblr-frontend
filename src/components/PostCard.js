import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import './PostCard.scss';

export default function PostCard(props) {
  return (
    <Container>
      <Card className="card-style">
        <Card.Header as="h6">
          <NavLink className="link-color" to={`/blog/${props.username}`}>
            { props.username }
          </NavLink>
        </Card.Header>

        <Card.Body>
          <Card.Title>
            <h1 className="display-5"> { props.title } </h1> 
          </Card.Title>
          <Card.Text>{ props.content }</Card.Text>
        </Card.Body>

        <Card.Footer className="text-muted">
          num-of-notes+link, reblog, comment, like
        </Card.Footer>

      </Card>
    </Container>
  );
}

PostCard.propTypes = {
  username: PropTypes.string.isRequired,
  userID: PropTypes.number.isRequired, 
  postID: PropTypes.number.isRequired, 
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

PostCard.defaultProps = {
  username: "no-username", 
  userID: -1,
  postID: -1, 
  title: "post-title", 
  content: "post-content"
};
