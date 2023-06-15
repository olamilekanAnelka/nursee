import React from 'react'
import '../LoginForm/login.css'

const Login = () => {
  return (
    <div className='loginWrapper'>
       <form  className="formParent">
        <div className="topLoginForm">
           <input id='mail' type="text" placeholder='username or email' />
           <input id='password' type="password" placeholder='password' />
            <div className='checkBox'>
            <label for="termsCheckbox">
          <input type="checkbox" id="termsCheckbox" required/>
         <span> Remember Me</span>
        </label>
        </div>
        <button type='submit'>Login</button>
        </div>
           <a href="">Forgot Password?</a>
           <a href="">Create an Account!</a>
       </form>
    </div>
  )
}

export default Login
