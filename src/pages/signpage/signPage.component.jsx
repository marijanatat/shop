import React from 'react';
import './signPage.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up'

const SignPage=()=>(
    <div className='sign-in-page'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
);
export default SignPage;