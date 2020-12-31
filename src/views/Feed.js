import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CenteredDiv from 'components/CenteredDiv';
import PostCard from 'components/PostCard';

export default function Feed() {
  return (
    <React.Fragment>
      <h1 className="display-3">Feed</h1>
      <PostCard />
      <PostCard />
    </React.Fragment>
  );
}

