import React, { useEffect, useState } from 'react'
import profile from '../images/profilr.avif'
import {useNavigate} from 'react-router-dom';
import aboutpic from '../images/pic.jpg'

const About = () => {

  const[userData,setUserData]=useState({});
  const navigate=useNavigate();

const callAboutPage=async()=>{
  
  try {
    const res=await fetch('/about',{
      method:"GET",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      credentials:"include"
    })
    const data=await res.json();
    console.log(data);
    setUserData(data);
    

    if(res.status !== 200){
      const error=new Error(res.error || 'falied to fetch');
      throw error;
    }
    
    
  } catch (err) {
    console.log(err);
    navigate('/login')
    
  }
}


  useEffect(()=>{
       callAboutPage();
  },[]);

  
  return (
    <>
      <div className='container emp-profile'>
        <form method="GET">
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src={userData.name === "poornima" ?aboutpic:profile} alt="Profile" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS:<span>1/10</span></p>
                <ul className="nav nav-tabs" role='tablist'>
                  <li className="nav-item">
                    <a className="nav-link active" id='home-tab' data-bs-toggle="tab" href='#home' role='tab'>About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id='profile-tab' data-bs-toggle="tab" href='#profile' role='tab'>TimeLine</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <input type='submit' name='btn' className='profile-edit-btn' value='Edit Profile'/>
            </div>
          </div>
          <div className='row'>
            {/* Left side links */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>WORK LINK</p> 
                <a href='https://github.com/Poornima2003?tab=repositories'>GITHUB</a><br/>
                <a href='https://github.com/Poornima2003?tab=repositories'>Projects</a><br/>
                <a href='https://github.com/Poornima2003?tab=repositories'>Mern Projects</a><br/>
                <a href='https://github.com/Poornima2003?tab=repositories'>Backend Projects</a><br/>
                <a href='https://github.com/Poornima2003?tab=repositories'>Frontend Projects</a><br/>
              </div>
            </div>
            {/* Right side data toggle */}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Phone Number</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Experience</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Hourly Rate</label>
                    </div>
                    <div className='col-md-6'>
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Total Project</label>
                    </div>
                    <div className='col-md-6'>
                      <p>230</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Experience Level</label>
                    </div>
                    <div className='col-md-6'>
                      <p>6 yrs of experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
