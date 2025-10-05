import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import "./login.css"
import assets from '../../assets/assets';

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (currState === "Sign Up") {
        await register({
          username: formData.username,
          email: formData.email,
          password: formData.password
        });
      } else {
        await login({
          email: formData.email,
          password: formData.password
        });
      }
      navigate('/chat');
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='login'>
        <img src={assets.logo_big} alt='logo' />
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{currState}</h2>
          
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          
          {currState === "Sign Up" ? (
            <input 
              type="text" 
              name="username"
              placeholder="username" 
              className="form-input" 
              value={formData.username}
              onChange={handleChange}
              required 
            />
          ) : null}
          <input 
            type="email" 
            name="email"
            placeholder="email" 
            className="form-input" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="password" 
            name="password"
            placeholder="password" 
            className="form-input" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : (currState === "Sign Up" ? "Create Account" : "Login now")}
          </button>
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