import React from 'react';
import { Link } from "react-router-dom";

import './sign-up-page.css';
import Header from '../../components/header/header';

function SignUpPage() {

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signUp = async () => {
    const request = await fetch('https://conduit.productionready.io/api/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        "user":{
          "username": username,
          "email": email,
          "password": password
        }
      })
    })
  }

  const usernameValue = (e) => {
    setUsername(e.target.value);
  }

  const emailValue = (e) => {
    setEmail(e.target.value);
  }

  const passwordValue = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
        <Header></Header>
        <div className="signUpFormWrapper">
          <h1 className="signUpTitle">
            Sign Up
          </h1>
          <Link href="" className="signUpLink">
            Have an account?
          </Link>
          <div className="inputsWrapper">
            <input className="signUpInput" type="text" placeholder="Username" onChange={usernameValue}/>
            <input className="signUpInput" type="email" placeholder="Email" onChange={emailValue}/>
            <input className="signUpInput" type="password" placeholder="Password" onChange={passwordValue}/>
            <div className="signUpButtonWrapper">
              <button className="signUpButton" onClick={signUp}>Sign Up</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default SignUpPage;
