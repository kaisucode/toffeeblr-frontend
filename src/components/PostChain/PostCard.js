import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowing, selectUsername } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const following = useSelector(selectFollowing);
  const [showFollowButton, setShowFollowButton] = useState(false);

  useEffect(() => {
    setShowFollowButton(!following.includes(post.username) && post.username !== username);
  }, [following]);

  function followUser(){
    dispatch(Network.FollowUser(post.username));
  }

  return (
    <React.Fragment>
      <Card.Header as="h6" className="d-flex justify-content-start align-items-center">
        <NavLink className="text-secondary" to={`/blog/${post.username}`}>
          <b> { post.username } </b>
        </NavLink>

        { showFollowButton 
            && <Button 
              className="mx-3 text-success" 
              variant="primary" 
              size="sm"
              onClick={followUser}
            >
              Follow
            </Button>
        }
      </Card.Header>

      <Card.Body className="border-bottom border-primary">
        <Card.Title>
          <h1 className="display-5"> { post.title } </h1> 
        </Card.Title>
        <Card.Text>{ post.content }</Card.Text>
      </Card.Body>
    </React.Fragment>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired 
};

PostCard.defaultProps = {
  post: {
    username: "no-username", 
    userID: -1,
    postID: -1, 
    title: "post-title", 
    content: "post-content", 
    userLiked: false
  }
};
