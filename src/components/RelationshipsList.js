import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function RelationshipsList(props){

  function renderUser(username){
    return (
      <Card key={username} className="m-0 border-0 rounded-0">
        <Card.Body className="d-flex justify-content-between align-items-center p-3">
          <NavLink className="text-secondary" to={`/blog/${username}`}>
            <b> { username } </b>
          </NavLink>

          <Button 
            className="text-success" 
            variant="primary" 
            size="sm" 
            onClick={() => props.buttonAction(username)}>
            {props.actionButtonText}
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div className="rounded bg-light p-1 mt-1">
      { props.listData.map((aUsername) => {
        return renderUser(aUsername);
      })}
    </div>
  );
}

RelationshipsList.propTypes = {
  listData: PropTypes.array,
  actionButtonText: PropTypes.string,
  buttonAction: PropTypes.func,
};

RelationshipsList.defaultProps = {
  listData: [], 
  buttonAction: () => {}
};

