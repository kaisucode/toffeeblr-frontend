import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowers, selectFollowerCount } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import RelationshipsList from 'components/RelationshipsList';
import SidebarLayout from 'components/SidebarLayout';

export default function Followers(){
  const dispatch = useDispatch();
  const followers = useSelector(selectFollowers);
  const followerCount = useSelector(selectFollowerCount);

  useEffect(() => {
    dispatch(Network.GetRelationshipData());
  }, []);

  function followUser(otherUsername){
    dispatch(Network.FollowUser(otherUsername));
  }

  return (
    <SidebarLayout>
      <h3 className="display-6"> {followerCount} Followers </h3> 
      <RelationshipsList listData={followers} actionButtonText={"Follow"} buttonAction={followUser}/>
    </SidebarLayout>
  );
}

