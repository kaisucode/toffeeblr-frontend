import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CenteredDiv from '../components/CenteredDiv';
import NewPost from 'components/NewPost';

export default function Feed() {
  return (
    <CenteredDiv>

      <Container>
        <h1 className="display-3">Feed</h1>
        <NewPost />
      </Container>

    </CenteredDiv>
  );
}

