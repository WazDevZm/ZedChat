import React, { useState } from 'react'
import "./login.css"
//import assets from '../../assets/assets'

const Login = () => {
  // creating a state varvibale
  
  const [currState, setCurrState] = useState("Sign Up");
  return (
    
    <div>
      <div>
        <h1 className='header'>Welcome to ZedChat</h1>
      </div>
      <div className='login'>
        
        <form className="login-form">
          <h2>{currState}</h2> 
          {currState === "Sign Up" ? <input type="text" placeholder="username" className="form-input" required /> : null}
          <input type="email" placeholder="email" className="form-input" required />
          <input type="password" placeholder="password" className="form-input" required />
          <button type="submit">{currState === "Sign Up" ? "Create Account" : "login now"}</button>
          <div className="login-term">
            <input type='checkbox' id='terms' />
            <label htmlFor='terms'>Agree to the terms of use & privacy policy.</label>
          </div>
          <div className='login-forgot'>
            {currState === "Sign Up" && (
              <p className='login-toggle'>
                Already have an account? <span onClick={() => setCurrState("Login")}>Login</span>
              </p>
            )}
            {currState === "Login" && (
              <p className='login-toggle'>
                Don't have an account? <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
              </p>
            )}
          </div>
        </form>
      </div>
      <footer className='footer'>ZedChat is created by Wazingwa Mugala, software engineer @ microsoft</footer>
    </div>
  )
}

export default Login
// check all the code in the login js file for erroe with the logo, somethin is wrng theree