import React, { useEffect } from 'react';
import RelationshipsList from 'components/RelationshipsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowers, selectFollowerCount } from 'store/slices/userDataSlice';

import * as Network from 'api/Network';

export default function Followers(){
  const dispatch = useDispatch();
  const followers = useSelector(selectFollowers);
  const followerCount = useSelector(selectFollowerCount);

  useEffect(() => {
    dispatch(Network.GetRelationshipData());
  }, []);

  return (
    <React.Fragment>
      <h3 className="display-6"> {followerCount} Followers </h3>
      <RelationshipsList listData={followers} actionButtonText={"Follow"} />
    </React.Fragment>
  );
}

