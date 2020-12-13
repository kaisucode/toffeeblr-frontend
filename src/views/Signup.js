import React from 'react';
import CenteredDiv from '../components/CenteredDiv';
import CredentialsForm from '../components/CredentialsForm';

export default function Signup() {
  return (
    <CenteredDiv>
      <CredentialsForm isLogin={false}/>
    </CenteredDiv>
  );
}



