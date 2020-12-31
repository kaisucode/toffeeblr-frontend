import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PostCard from 'components/PostCard';

import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectFeedContent } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

export default function Feed() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const feedContent = useSelector(selectFeedContent);
  
  useEffect(() => {
    dispatch(Network.GetFeedContent());
  }, []);

  return (
    <React.Fragment>
      <h1 className="display-3">Feed</h1>
      { feedContent.map((value) => {
        return <PostCard 
          key={value.id}
          username={value.username}
          userID={value.user_id}
          postID={value.id}
          title={value.title} 
          content={value.content} />
      })}
    </React.Fragment>
  );
}

