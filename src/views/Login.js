import React from 'react';
import CenteredDiv from '../components/CenteredDiv';
import CredentialsForm from '../components/CredentialsForm';

export default function Login() {
  return (
    <CenteredDiv>
      <CredentialsForm isLogin={true}/>
    </CenteredDiv>
  );
}

