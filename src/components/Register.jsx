import React from 'react';
import "../styles/register.scss";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
        <span className="registerTitle">REGISTER</span>
        <form className="registerForm">
          <label>Username</label>
          <input type="text" required className='registerInput' />
            <label>Email</label>
            <input type="text" required className='registerInput'/>
            <label>Password</label>
            <input type="password" required className='registerInput'/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className='link' to='/login'>LOGIN</Link></button>
    </div>
  );
};

export default Register;
