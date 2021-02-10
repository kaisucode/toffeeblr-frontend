import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, HeartFill, Cursor, Chat, ArrowRepeat } from 'react-bootstrap-icons';
import NewPost from 'components/NewPost';
import PostCard from './PostCard';
import * as Network from 'api/Network';

export default function PostChain({ fullPost, displayFooter }) {

  const post = fullPost[0];
  const dispatch = useDispatch();
  const [likeButtonHover, setLikeButtonHover] = useState(false);
  const [userLiked, setUserLiked] = useState(post.userLiked);
  const [numOfNotes, setNumOfNotes] = useState(0);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    console.log(JSON.stringify(fullPost, null, 2))
    var num = -1;
    fullPost.forEach((aPost) => {
      num += (aPost.comments.length + aPost.likes.length + 1)
    });
    setNumOfNotes(num);
  }, []);


  function likePost(){
    dispatch(Network.LikePost(post.id)).then((res) => {
      setUserLiked(true);
      setNumOfNotes(numOfNotes + 1);
    });
  }

  function unlikePost(){
    dispatch(Network.UnlikePost(post.id)).then((res) => {
      setUserLiked(false);
      setNumOfNotes(numOfNotes - 1);
    });
  }

  function renderLikeButton(){
    if (userLiked){
      return <HeartFill 
        size={20} 
        className="iconButton" 
        style={{color: "rgba(255, 0, 0, 0.6)"}}
        onClick={unlikePost}
      />
    }
    else{
      return <Heart 
        size={20} 
        className="iconButton"
        onClick={likePost}
      />
    }
  }

  function renderFooter() {
    return (
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start">
          <div className="mr-3">
            { numOfNotes }
            { (numOfNotes != 1) ? " notes" : " note" }
          </div>
          <Cursor className="mr-3 iconButton" size={20} />
          <Chat className="mr-3 iconButton" size={20} />
          <ArrowRepeat className="mr-3 iconButton" size={20} onClick={() => setModalShow(true)} />
        </div>

        <div className="like-button-container"
          onMouseOver={() => setLikeButtonHover(true)} 
          onMouseOut={() => setLikeButtonHover(false)} >
          {renderLikeButton()}
        </div>
      </Card.Footer>
    );
  }

  return (
    <Container className="mb-3">
      <Card className="text-left text-secondary">
        {fullPost.slice(0).reverse().map((value) => <PostCard post={value} key={value.id}/>)}
        { displayFooter && renderFooter()}
      </Card>
      <NewPost modalShow={modalShow} onHide={() => setModalShow(false)} parent_id={post.id} parent_post={fullPost}/>
    </Container>
  );
}

PostChain.propTypes = {
  fullPost: PropTypes.object.isRequired,
  displayFooter: PropTypes.bool
};

PostChain.defaultProps = {
  displayFooter: true
};
