import React from 'react'
import profile from '../images/profilr.avif'

const About = () => {
  return (
    <>
      <div className='container emp-profile'>
        <form method="">
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src={profile} alt="Profile" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Poornima Theurkar</h5>
                <h6>Web Developer</h6>
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
                      <p>238u48u385u0</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Poornima Theurkar</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>theurkar0@gmail.com</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Phone Number</label>
                    </div>
                    <div className='col-md-6'>
                      <p>+91 23445354678</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Address</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Pune, India</p>
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
