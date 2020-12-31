import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CenteredDiv from 'components/CenteredDiv';
import PostCard from 'components/PostCard';

import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectExploreContent } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

export default function Explore() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const exploreContent = useSelector(selectExploreContent);
  
  useEffect(() => {
    dispatch(Network.GetExploreContent());
  }, []);

  return (
    <React.Fragment>
      <h1 className="display-3">Explore</h1>
      { exploreContent.map((value) => {
        return <PostCard 
          username={value.username}
          userID={value.user_id}
          postID={value.id}
          title={value.title} 
          content={value.content} />
      })}
    </React.Fragment>
  );
}

