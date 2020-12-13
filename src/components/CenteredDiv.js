import React from 'react';

export default function CenteredDiv(props) {
  return (
    <div style={{ display: "flex", height: "84vh", width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      {props.children}
    </div>
  );
};

