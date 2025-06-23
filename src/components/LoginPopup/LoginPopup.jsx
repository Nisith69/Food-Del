import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
      <div className="login-popup-title">
      <h2>{currState}</h2>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
      </div>
      <div className="login-popup-input">
        {currState=="login"?<></>: <input type="text" placeholder='Your name' required />}
       
        <input type="text" placeholder='your email' required />
        <input type="text" placeholder='your password' required />
        <button>{currState==="sign up"? "create account":"login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"?<p>create a new account? <span onClick={()=> setCurrState("Sign up")}>click here</span></p>:<p>Already have an account? <span onClick={()=> setCurrState("Login")}>Click here</span></p>}
        
        
      </div>
      </form>
    </div>
    
  )
}

export default LoginPopup
