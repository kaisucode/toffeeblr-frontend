import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
  return (
    <div>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
}



