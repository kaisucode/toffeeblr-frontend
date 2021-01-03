import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function RelationshipsList(props){

  function renderUser(username){
    return (
      <Card key={username}>
        <Card.Body className="d-flex justify-content-between align-items-center p-3">
          <NavLink className="text-secondary" to={`/blog/${username}`}>
            <b> { username } </b>
          </NavLink>

          <Button className="text-success" variant="primary" size="sm">{props.actionButtonText}</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <React.Fragment>
      { props.listData.map((aUsername) => {
        return renderUser(aUsername);
      })}
    </React.Fragment>
  );
}

RelationshipsList.propTypes = {
  listData: PropTypes.array.isRequired,
  actionButtonText: PropTypes.string,
};

