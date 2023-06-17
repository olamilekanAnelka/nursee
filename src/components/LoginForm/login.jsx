import React, {useState} from 'react'
import '../LoginForm/login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
         const navigate= useNavigate();
         const [nameOrEmail, setNameOrEmail] = useState('');
         const [password, setPassword] = useState('');


         const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Name or Email:', nameOrEmail);
          console.log('Password:', password);
          navigate('/contactUs');
        };


  return (
    <div className='loginWrapper'>
       <form  className="formParent" onSubmit={handleSubmit}>
        <div className="topLoginForm">
           <input id='mail' type="text" placeholder='username or email' value={nameOrEmail} onChange={(e) => setNameOrEmail(e.target.value)}  />
           <input id='password' type="password" placeholder='password'value={password} onChange={(e) => setPassword(e.target.value)}  />
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
