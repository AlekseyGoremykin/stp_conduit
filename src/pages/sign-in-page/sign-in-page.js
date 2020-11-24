import React from 'react';
import { Link } from "react-router-dom";

import './sign-in-page.css';
import Header from '../../components/header/header';

function SignInPage() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signIn = async () => {
    const request = await fetch('https://conduit.productionready.io/api/users/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        "user":{
          "email": email,
          "password": password
        }
      })
    })
    const token = await request.json();
    console.log(token);
    window.localStorage.setItem('token', token.user.token);
    document.cookie = `token = ${token.user.token}`
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
      <div className="signInFormWrapper">
        <h1 className="signInTitle">
          Sign In
        </h1>
        <Link href="" className="signInLink">
          Need an account?
        </Link>
        <div className="inputsWrapper">
          <input className="signInInput" type="email" placeholder="Email" onChange={emailValue}/>
          <input className="signInInput" type="password" placeholder="Password" onChange={passwordValue}/>
          <div className="signUpButtonWrapper">
            <button className="signInButton" onClick={signIn}>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
