import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CenteredDiv from '../components/CenteredDiv';

export default function Feed() {
  return (
    <CenteredDiv>
      <Container>
        <h1 className="display-3">Feed</h1>
      </Container>
    </CenteredDiv>
  );
}

