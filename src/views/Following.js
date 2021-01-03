import React, { useEffect } from 'react';
import RelationshipsList from 'components/RelationshipsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFollowing, selectFollowingCount } from 'store/slices/userDataSlice';

import { Row, Col, Container } from 'react-bootstrap';

import * as Network from 'api/Network';

export default function Following(){
  const dispatch = useDispatch();
  const following = useSelector(selectFollowing);
  const followingCount = useSelector(selectFollowingCount);

  useEffect(() => {
    dispatch(Network.GetRelationshipData());
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Row> 
          <Col md="1" /> 
          <Col md="7" className="text-left">
            <h3 className="display-6"> {followingCount} Following </h3> 
          </Col>
        </Row>
        <Row>
          <Col md="1" /> 
          <Col md="7">
            <RelationshipsList listData={following} actionButtonText={"Unfollow"} />
          </Col>
          <Col md="4" className="d-none d-sm-block">
            Check out these!!<br />
            Radar
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

