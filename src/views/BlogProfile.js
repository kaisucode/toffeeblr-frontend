import React, { useState, useEffect } from 'react';
import { useRouteMatch, } from 'react-router-dom';
import * as Network from 'api/Network';

import PostCard from 'components/PostCard';
import SidebarLayout from 'components/SidebarLayout';
import RelationshipsList from 'components/RelationshipsList';
import { Container, Row, Col } from 'react-bootstrap';

export default function BlogProfile() {
  const match = useRouteMatch('/blog/:username');
  const [userContent, setUserContent] = useState({});

  useEffect(() => {
    if (match){
      Network.GetUserContentByUsername(match.params.username).then((res) => {
        setUserContent(res);
      });
    }
  }, []);

  return (
    <React.Fragment>
      { match && 
        <h1 className="display-3">{ match.params.username }</h1>
      }
      <Container>
        <Row className="justify-content-center mb-5">
          <Col xs={2}>Posts</Col>
          <Col xs={2}>Likes</Col>
          <Col xs={2}>Follows</Col>
        </Row>
      </Container>

      <SidebarLayout>
        <RelationshipsList listData={userContent.following} displayButton={false}/>
        { userContent.posts &&
            userContent.posts.map((value) => {
              return <PostCard 
                key={value.id}
                username={value.username}
                userID={value.user_id}
                postID={value.id}
                title={value.title} 
                content={value.content} />
            })}
      </SidebarLayout>
    </React.Fragment>
  );
}
