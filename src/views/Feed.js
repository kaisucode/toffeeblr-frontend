import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectFeedContent } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import PostChain from 'components/PostChain';
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
        return <PostChain fullPost={value} key={value.id}/> 
      })}
    </SidebarLayout>
  );
}

