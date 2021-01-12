import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowing, selectUsername } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import { Heart, HeartFill, Cursor, Chat, ArrowRepeat } from 'react-bootstrap-icons';

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const following = useSelector(selectFollowing);
  const [showFollowButton, setShowFollowButton] = useState(false);
  const [likeButtonHover, setLikeButtonHover] = useState(false);
  const [userLiked, setUserLiked] = useState(post.userLiked);

  useEffect(() => {
    setShowFollowButton(!following.includes(post.username) && post.username !== username);
  }, [following]);

  function followUser(){
    dispatch(Network.FollowUser(post.username));
  }

  function likePost(){
    dispatch(Network.LikePost(post.id)).then((res) => {
      setUserLiked(true);
    });
  }

  function unlikePost(){
    dispatch(Network.UnlikePost(post.id)).then((res) => {
      setUserLiked(false);
    });
  }

  function renderLikeButton(){
    if (userLiked){
      return <HeartFill 
        size={20} 
        className="likeButton" 
        style={{color: "rgba(255, 0, 0, 0.6)"}}
        onClick={unlikePost}
      />
    }
    else{
      return <Heart 
        size={20} 
        className="likeButton"
        onClick={likePost}
      />
    }
  }

  return (
    <Container>
      <Card className="text-left text-secondary mb-3">
        <Card.Header as="h6" className="d-flex justify-content-start align-items-center">
          <NavLink className="text-secondary" to={`/blog/${post.username}`}>
            <b> { post.username } </b>
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
            <h1 className="display-5"> { post.title } </h1> 
          </Card.Title>
          <Card.Text>{ post.content }</Card.Text>
        </Card.Body>

        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start">
            <div className="mr-3"># notes</div>
            <Cursor className="mr-3" size={20} />
            <Chat className="mr-3" size={20} />
            <ArrowRepeat className="mr-3" size={20} />
          </div>

          <div className="like-button-container"
            onMouseOver={() => setLikeButtonHover(true)} 
            onMouseOut={() => setLikeButtonHover(false)} >
            {renderLikeButton()}
          </div>
        </Card.Footer>

      </Card>
    </Container>
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
