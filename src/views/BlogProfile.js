import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as Network from 'api/Network';
import './BlogProfile.scss';

import PostCard from 'components/PostCard';
import SidebarLayout from 'components/SidebarLayout';
import RelationshipsList from 'components/RelationshipsList';
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap';

export default function BlogProfile() {
  const match = useRouteMatch('/blog/:username');
  const [userContent, setUserContent] = useState({});
  const [mode, setMode] = useState("posts");

  useEffect(() => {
    if (match){
      Network.GetUserContentByUsername(match.params.username).then((res) => {
        setUserContent(res);
        console.log(JSON.stringify(res, null, 2)); 
      });
    }
  }, []);

  function renderPosts(){
    if (userContent.posts){
      return userContent.posts.map((value) => {
        return <PostCard 
          key={value.id}
          username={value.username}
          userID={value.user_id}
          postID={value.id}
          title={value.title} 
          content={value.content} />
      })
    }
  }

  function renderMode(){
    if (mode === "posts"){
      return renderPosts();
    }
    else if (mode === "following"){
      return (<RelationshipsList listData={userContent.following} displayButton={false}/>);
    }
  }

  function getClassName(aMode){
    if (mode === aMode){
      return "active-mode-button mode-button";
    }
    else{
      return "mode-button";
    }
  }

  return (
    <React.Fragment>
      { match && 
        <h1 className="display-3">{ match.params.username }</h1>
      }
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={2}> <div className={getClassName("posts")} onClick={() => setMode("posts")}> Posts </div> </Col>
          <Col xs={2}> <div className={getClassName("likes")} onClick={() => setMode("likes")}> Likes </div> </Col>
          <Col xs={2}> <div className={getClassName("following")} onClick={() => setMode("following")}> Following </div> </Col>
        </Row>
      </Container>

      <SidebarLayout>
        { renderMode() }
      </SidebarLayout>
    </React.Fragment>
  );
}
