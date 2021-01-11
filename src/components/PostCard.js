import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowing, selectUsername } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import { Heart, Cursor, Chat, ArrowRepeat } from 'react-bootstrap-icons';

export default function PostCard(props) {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const following = useSelector(selectFollowing);
  const [showFollowButton, setShowFollowButton] = useState(false);

  useEffect(() => {
    setShowFollowButton(!following.includes(props.username) && props.username != username);
  }, [following]);

  function followUser(){
    dispatch(Network.FollowUser(props.username));
  }

  return (
    <Container>
      <Card className="text-left text-secondary mb-3">
        <Card.Header as="h6" className="d-flex justify-content-start align-items-center">
          <NavLink className="text-secondary" to={`/blog/${props.username}`}>
            <b> { props.username } </b>
          </NavLink>

          { showFollowButton &&
          <Button 
            className="mx-3 text-success" 
            variant="primary" 
            size="sm"
            onClick={followUser}
          >
            Follow
          </Button>
          }
        </Card.Header>

        <Card.Body>
          <Card.Title>
            <h1 className="display-5"> { props.title } </h1> 
          </Card.Title>
          <Card.Text>{ props.content }</Card.Text>
        </Card.Body>

        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start">
            <div className="mr-3"># notes</div>
            <Cursor className="mr-3" size={20} />
            <Chat className="mr-3" size={20} />
            <ArrowRepeat className="mr-3" size={20} />
          </div>
          <Heart size={20} />
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
  content: PropTypes.string.isRequired, 
};

PostCard.defaultProps = {
  username: "no-username", 
  userID: -1,
  postID: -1, 
  title: "post-title", 
  content: "post-content", 
};
