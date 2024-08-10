import React from 'react'
import signup from '../images/reg.png'
const Signup = () => {
  return (
  <section className='signup'>
    <div className='container mt-5'>
        <div className='signup-content'>
            <div className='signup-form'>
                <h2 className='form-title'>Sign Up</h2>
                <form>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Your Name</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" class="form-label">Your Profession</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> 
            </div>
            <div className='signup-image'>
            <img src={signup} alt="Sign Up" />
          </div>
        </div>
    </div>
  </section>
    
    

         

  )
}

export default Signup