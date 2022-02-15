import React from "react";
import "./login.scss";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.svg";
import google from "../../assets/images/google.svg";
import linkedin from "../../assets/images/linkedin.svg";
import { useState } from "react";
import { Navigation } from "../navigation";

import { useNavigate } from "react-router-dom";

import axios from "axios";

function Login(props) {
  axios.defaults.withCredentials = true;
  let navigate = useNavigate();
  const [login, setlogin] = useState(false);

  const handleclick = () => {
    setlogin(!login);
  };
  const [accountType, setAccountType] = useState("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SignUp
  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = { accountType, fullName, email, password };

    axios
      .post("http://localhost:2000/users/signUp", userData)
      .then((response) => {
        //   console.log(response);
        if (response.data.Status === "S") {
          alert("successful Registerd");
          setlogin(!login);
        } else if (response.data.Status === "F") {
          //  console.log("jcknc");
          alert("username or Email Id Already exist");
        }
      });
  };
  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {email,password };

  axios.post('http://localhost:2000/users/login',userData).then((response) => {
      
      console.log(response);
      if(response.data.Status === "S"){
        const userData=response.data.user;
       // console.log(userData);
        navigate('/dashboard',{state:userData});
         
      }else if(response.data.Status === "F"){
         alert("Invalid credentials");
      }  
    
    })
   }


   var islogin=true;

  return (
    <div className="login">
     <Navigation loginpg= {islogin} />   
    <div
      className={`login__colored-container ${
           login
          ? "login__colored-container--left"
          : "login__colored-container--right"
       }`}
    >

    </div>
    <div
      className={`login__welcome-back
      ${
        login ? "login__welcome-back--active" : "login__welcome-back--inactive"
      }`}
      >
        <div className="login__welcome-back__logo-container">
          <img
            className="login__welcome-back__logo-container--image"
            src={logo}
            alt="Budwriter"
          />
          LEVEL UP
        </div>
        <div className="login__welcome-back__main-container">
          <div className="login__welcome-back__main-container__text-container">
            <span className="login__welcome-back__main-container__text-container--title">
              Welcome Back!
            </span>
            {/* <span className="login__welcome-back__main-container__text-container--secondary">
                            To keep sharing your work with us, please log in.
                        </span> */}
          </div>
          <div
            onClick={handleclick}
            className="login__welcome-back__main-container__button-container"
          >
            SIGN IN
          </div>
        </div>
      </div>
      <div
        className={`login__create-container 
      ${
        login
          ? "login__create-container--active"
          : "login__create-container--inactive"
      }`}
      >
        Create Account
        {/* <div className="login__create-container__social-container">
        <img
          className="login__create-container__social-container--facebook-icon"
          src={facebook}
          alt=""
        />
        <img
          className="login__create-container__social-container--google-icon"
          src={google}
          alt=""
        />
        <img
          className="login__create-container__social-container--linkedin-icon"
          src={linkedin}
          alt=""
        />
      </div>
      <span className="login__create-container--info-text">
        or use email for your registration
      </span>  */}
        <div className="login__create-container__form-container">
          <form
            className="login__create-container__form-container__form"
            onSubmit={handleSignUp}
          >
            <input
              className="login__create-container__form-container__form--name"
              type="text"
              placeholder="Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              className="login__create-container__form-container__form--email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="login__create-container__form-container__form--password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <select
              id="ac"
              name="Account Type"
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="Recuriter">Recuriter</option>
              <option value="Admin">Admin</option>
            </select>

            <button className="login__create-container__form-container__form--submit">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <div
        className={`login__login-container
      ${
        !login
          ? "login__login-container--active"
          : "login__login-container--inactive"
      }`}
      >
        <div className="login__login-container__logo-container">
          <img
            className="login__login-container__logo-container--image"
            src={logo}
            alt="Budwriter"
          />
          LEVEL UP
        </div>
        <div className="login__login-container__main-container">
          {/* <div className="login__login-container__main-container__social-container">
                        <img className="login__login-container__main-container__social-container--facebook-icon" src={facebook} alt="" />
                        <img className="login__login-container__main-container__social-container--google-icon" src={google} alt="" />
                        <img className="login__login-container__main-container__social-container--linkedin-icon" src={linkedin} alt="" />
                    </div>
                    <span className="login__login-container__main-container--info-text">or use email for your login</span>
                    */}
          <div className="login__login-container__main-container__form-container">
            <form
              className="login__login-container__main-container__form-container__form"
              onSubmit={handleLogin}
            >
              <input
                className="login__login-container__main-container__form-container__form--email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="login__login-container__main-container__form-container__form--password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="login__login-container__main-container__form-container__form--submit">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`login__hello-container
        ${
          !login
            ? "login__hello-container--active"
            : "login__hello-container--inactive"
        }`}
      >
        <div className="login__welcome-back__main-container__text-container">
          <span className="login__welcome-back__main-container__text-container--title">
            Hello, stranger!
          </span>
          {/* <span className="login__welcome-back__main-container__text-container--secondary">
            Enter your personal details to Login
          </span> */}
        </div>
        <div
          onClick={handleclick}
          className="login__welcome-back__main-container__button-container"
        >
          SIGN UP
        </div>
      </div>
    </div>
  );
}

export default Login;
