import React from 'react'
import '../RegistrationForm/reg.css'

const Reg = () => {
  return (
    <div className='regWrapper'>
      <form className='regform'>
        <h3>EDUCATION APPOINTMENT FORM</h3>
  <div class="regInput">
  <input type="text" class="form-control" id="validationCustom01"  placeholder='Title' /> 
  </div>
  <div class="regInput">
  <input type="text" class="form-control" id="validationCustom02"  placeholder='Name'/>
    </div>
    <div class="regInput">
  <input type="text" class="form-control" id="validationCustom02"  placeholder='Email'/>
    </div>
    <div class="regInput">
  <input type="text" class="form-control" id="validationCustom02"  placeholder='Phone Number'/>
    </div>
    <div class="">
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Course type</option>
      <option>...</option>
    </select>
  </div>

  <div>
    <h4>How would you like how to be located</h4>
  </div>
  <div class="">
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">By phone</option>
      <option>...</option>
    </select>
  </div>
  <div class="">
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Hours: 8am 10pm</option>
      <option>...</option>
    </select>
  </div>
  
  <div class="">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
      <p>I agree to the <span>Terms and Conditions</span></p>
      </label>
    </div>
  </div>
  <div class="">
    <button class="" type="submit">Request an appointment</button>
  </div>
</form>
    </div>
  )
}

export default Reg
