import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom'; 
import signup from '../images/reg.png';

const Signup = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputs=(e)=>{
    // console.log(e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    
  }
  const PostData= async(e)=>{
    e.preventDefault();
    const{name,email,phone,work,password,cpassword}=user;

   const res= await fetch("/register",{

    method:"POST",
   headers:{
      "Content-Type":"application/json"
   },
   body:JSON.stringify({
    name,email,phone,work,password,cpassword
   })
   })

   const data=await res.json();

   if(res.status === 422 || !data){
    window.alert("invalid resgisteration");
    console.log("invalid registeration");
    
   }
   else{
    window.alert("sucessful resgisteration");
    console.log("sucessful  registeration");
    navigate("/login")
   }

   
  }

 

  return (
    <section className='signup'>
      <div className='container mt-5'>
        <div className='signup-content'>
          <div className='signup-form'>
            <h2 className='form-title'>Sign Up</h2>
            <form method='POST' onSubmit={PostData}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  autoComplete="off"
                />

                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  autoComplete="off"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                <label htmlFor="phone" className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  autoComplete="off"
                />

                <label htmlFor="work" className="form-label">Your Profession</label>
                <input
                  type="text"
                  className="form-control"
                  id="work"
                  name="work"
                  value={user.work}
                  onChange={handleInputs}
                  autoComplete="off"
                />

                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  autoComplete="off"
                />

                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  autoComplete="off"
                />
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="check1" />
                <label className="form-check-label" htmlFor="check1">Check me out</label>
              </div>
              <button  onClick={PostData}  type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
          <div className='signup-image'>
            <img src={signup} alt="Sign Up" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
