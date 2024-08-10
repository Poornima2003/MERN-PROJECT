import React from 'react'
import login from '../images/login.jpg'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <section className='signup'>
    <div className='container mt-5'>
        <div className='signup-content'>
        
            <div className='signup-image'>
            <img src={login} alt="Sign Up" />
            <NavLink to='/signup' className='signup-image-link'>Create an Account</NavLink>
          </div>
        
            <div className='signup-form'>
                <h2 className='form-title'>Sign Up</h2>
                <form>
  <div class="mb-3">
  
  <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="text" class="form-control" id="exampleInputEmail1" />
    
    
   
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Log In</button>
</form> 
            </div>
            </div>
        
    </div>
  </section>
    
  )
}

export default Login