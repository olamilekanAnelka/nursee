import React from 'react'
import '../LoginForm/login.css'

const Login = () => {
  return (
    <div className='loginWrapper'>
       <form  className="formParent">
           <input type="text" placeholder='username or email' />
           <input type="password" placeholder='password' />
           <button type='submit'>Login</button>
       </form>
    </div>
  )
}

export default Login
