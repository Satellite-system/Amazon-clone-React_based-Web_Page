import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Recourses/amazon-2.svg'
import './Styles/Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <div className='login'>
      <Link to='/'>
      <img className='logoImg' src={logo} alt="img" />
      </Link>

      <div className="signInBox">
        <h1>Sign-In</h1>
        <form action="login">
          <label htmlFor="numBox">Email or mobile phone number</label>
          <input className='login__input' type="text" id='numBox'/>
          <label htmlFor="numBox">Password</label>
          <input className='login__input' type="password" id='numBox'/>
          <button>Continue</button>
        </form>
        <p>By continuing, you agree to Fake Amazon's Conditions of Use and Privacy Notice.</p>
      </div>

      <span className='login__bottom'> New to Fake Amazon? </span>
      <button className='login__newAccount'>Create your Amazon account</button>

    </div>
  )
}

export default Login