import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <Link className="btn btn-primary" to="/">
        Login
      </Link>

      <Link className="btn btn-secondary" to="/signup">
        Signup
      </Link>
    </div>
  );
}

