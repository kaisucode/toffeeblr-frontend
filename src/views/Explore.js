import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectExploreContent } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import PostChain from 'components/PostChain';
import SidebarLayout from 'components/SidebarLayout';

export default function Explore() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const exploreContent = useSelector(selectExploreContent);

  useEffect(() => {
    dispatch(Network.GetExploreContent());
  }, []);

  return (
    <SidebarLayout>
      { exploreContent.map((value) => {
        return <PostChain fullPost={value} key={value.id}/>
      })}
    </SidebarLayout>
  );
}

