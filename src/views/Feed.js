import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectFeedContent } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import PostCard from 'components/PostCard';
import SidebarLayout from 'components/SidebarLayout';

export default function Feed() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const feedContent = useSelector(selectFeedContent);

  useEffect(() => {
    dispatch(Network.GetFeedContent());
  }, []);

  return (
    <SidebarLayout>
      { feedContent.map((value) => {
        return <PostCard 
          key={value.id}
          username={value.username}
          userID={value.user_id}
          postID={value.id}
          title={value.title} 
          content={value.content} />
      })}
    </SidebarLayout>
  );
}

