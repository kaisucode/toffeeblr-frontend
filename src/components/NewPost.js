import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';
import './NewPost.scss';

export default function NewPost(props){
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);

  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  function makePost(){
    var data = { title: postTitle, content: postContent }
    dispatch(Network.MakePost(data));
    props.onHide();
    setPostTitle("");
    setPostContent("");
  }

  return (
    <React.Fragment>

      <Modal
        show={props.modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >

        <Form>
          <Modal.Header>
            <Modal.Title>
              <h4> {username} </h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicUsername">
              <Form.Control 
                type="text" 
                value={postTitle}
                className="postTitleInput"
                onChange={e => setPostTitle(e.target.value)}
                placeholder="Title" />
            </Form.Group>

            <Form.Group>
              <Form.Control 
                as="textarea" 
                rows={5}
                value={postContent}
                className="postContentInput"
                onChange={e => setPostContent(e.target.value)}
                placeholder="Your Post Here: " />
            </Form.Group>

            <h5>Tags: </h5>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between modalFooter">
            <Button variant="dark" onClick={props.onHide}>Close</Button>
            <Button onClick={makePost}>Post</Button>
          </Modal.Footer>
        </Form>

      </Modal>
    </React.Fragment>
  );
}
