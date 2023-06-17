import React, {useState} from 'react'
import '../RegistrationForm/reg.css'
import { useNavigate } from 'react-router-dom';

const Reg = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [courseType, setCourseType] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [hours, setHours] = useState('');
  const [agreed, setAgreed] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login')
  };

  return (
    <div className='regWrapper'>
      <form className='regform'onSubmit={handleSubmit}>
        <div className="regdiv">
        <h3>EDUCATION APPOINTMENT FORM</h3>
  <div class="regInput">
  <input type="text" class="form-control" id="validationCustom01"  placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} /> 
  </div>
  <div class="regInput">
  <input type="text" class="form-control" id="validationCustom02"  placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div class="regInput">
  <input type="text" class="form-control" id="validationCustom02"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div class="regInput">
  <input type="text" class="form-control" id="validationCustom02"  placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
    </div>
    <div class="regInput">
  <input type="password" class="form-control" id="validationCustom02"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <div class="">
    <select class="form-select" id="validationCustom04" required  value={courseType} onChange={(e) => setCourseType(e.target.value)}>
      <option selected disabled value="">Course type</option>
      <option>...</option>
    </select>
  </div>

  <div>
    <h4>How would you like how to be located</h4>
  </div>
  <div class="">
    <select class="form-select" id="validationCustom04" required  value={contactMethod} onChange={(e) => setContactMethod(e.target.value)}>
      <option selected disabled value="">By phone</option>
      <option>...</option>
    </select>
  </div>
  <div class="">
    <select class="form-select" id="validationCustom04" required value={hours} onChange={(e) => setHours(e.target.value)}>
      <option selected disabled value="">Hours: 8am 10pm</option>
      <option>...</option>
    </select>
  </div>
  
  <div class="">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)}/>
      <label class="form-check-label" for="invalidCheck">
      <p>I agree to the <span>Terms and Conditions</span></p>
      </label>
    </div>
  </div>
  <div class="">
    <button class="" type="submit">Request an appointment</button>
  </div>
  </div>
</form>
    </div>
  )
}

export default Reg
