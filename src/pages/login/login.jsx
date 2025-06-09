import React from 'react'
import "./login.css"
import assets from '../../assets/assets'

const Login = () => {
  return (
    <div>
      <div className='login'>
        <img src={assets.logo_big} alt='' className='logo' />
        <form className="login-form">
          <h2>Sign Up</h2> 
          <h1>developed by Wazingwa</h1>
          <input type="text" placeholder="username" className="form-input" required />
          <input type="email" placeholder="email" className="form-input" required/>
          <input type="password" placeholder="password" className="form-input" required/>
          <button type="submit" className="btn">Sign Up</button>
          <div className="login-term">
            <input type='checkbox' id='terms'/>
            <label htmlFor='terms'>Agree to the terms of use & privacy policy.</label>
          </div>
          <div className='login-forgot'>
            <p className='login-toggle'>Already have an account? <span>Login</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
//making all the neede d chages fro the files and from the acts that  i have bee given, grinding from the start till the end
// wile learning al th
// we are learning hoe to vo dei i javascrit abyusing this caht app as a bweaking p o our leaning, buildin and scallj this thing from scratch
//using the resources taht we have been given, and the knowledge that we have gained from the previous lessons
// this is a chat app that is being built using react and firebase as the backend, making the comments for the code
// aid some new feature to the app for shiptment int he comng moths and dayas
// we are deplotung all the code as required so as to feel like people building adn shiiping real prohucts in real timwe are leanig
// this is a chat app is meant to be simple and add or the feautes that a nirmal app can have to instriduce al the iter factoes that
// w can have into the syst