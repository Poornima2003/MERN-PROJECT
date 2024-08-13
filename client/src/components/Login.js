import React, { useState } from 'react'
import login from '../images/login.jpg'
import { NavLink,useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser=async(e)=>{
    e.preventDefault();
    const res=await fetch('/signin',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data=res.json();
    if(res.status === 400 || !data){
      window.alert('invalid credintial')
    }
    else{
      window.alert('Login Sucessfully')
      navigate('/')
    }
  }

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
            <form method='POST'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>

              <button
              onClick={loginUser} 
              type="submit" className="btn btn-primary">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
