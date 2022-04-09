import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Recourses/amazon-2.svg";
import "./Styles/Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          console.log("logged In!");
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Successful SignUp", user);
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="logoImg" src={logo} alt="img" />
      </Link>

      <div className="signInBox">
        <h1>Sign-In</h1>
        <form action="login">
          <label htmlFor="numBox">Email or mobile phone number</label>
          <input
            className="login__input"
            value={email}
            type="text"
            id="numBox"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="numBox">Password</label>
          <input
            className="login__input"
            value={pwd}
            type="password"
            id="numBox"
            onChange={(e) => setPwd(e.target.value)}
          />
          <button onClick={logIn}>Continue</button>
        </form>
        <p>
          By continuing, you agree to Fake Amazon's Conditions of Use and
          Privacy Notice.
        </p>
      </div>

      <span className="login__bottom"> New to Fake Amazon? </span>
      <button className="login__newAccount" onClick={signUp}>
        Create your Amazon account
      </button>
    </div>
  );
}

export default Login;
