import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowing, selectFollowingCount } from 'store/slices/userDataSlice';
import * as Network from 'api/Network';

import RelationshipsList from 'components/RelationshipsList';
import SidebarLayout from 'components/SidebarLayout';

export default function Following(){
  const dispatch = useDispatch();
  const following = useSelector(selectFollowing);
  const followingCount = useSelector(selectFollowingCount);

  useEffect(() => {
    dispatch(Network.GetRelationshipData());
  }, []);

  function unfollowUser(otherUsername){
    dispatch(Network.UnfollowUser(otherUsername));
  }

  return (
    <SidebarLayout>
      <h3 className="display-6 text-left"> {followingCount} Following </h3> 
      <RelationshipsList listData={following} actionButtonText={"Unfollow"} buttonAction={unfollowUser} />
    </SidebarLayout>
  );
}

