import React,{useEffect,useState} from 'react'
import phone from '../images/phone.png'
import email from '../images/email.png'
import address from '../images/address.png'
const Contact = () => {
  const[userData,setUserData]=useState({name:"",email:"",phone:"",message:""});
  
const userContact=
async()=>{
  
  try {
    const res=await fetch('/getdata',{
      method:"GET",
      headers:{
  
        'Content-Type':'application/json'
      },
     
    })
    const data=await res.json();
    console.log(data);
    setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
    

    if(res.status !== 200){
      const error=new Error(res.error || 'falied to fetch');
      throw error;
    }
    
    
  } catch (err) {
    console.log(err);
    
    
  }
}


  useEffect(()=>{
       userContact();
  },[]);
  const handleChanges=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserData({...userData,[name]:value})
  }

  // send the data to bakend

  const contactForm=async(e)=>{
    e.preventDefault();
    const{name,email,phone,message}=userData;

    const res=await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    })
    const data=await res.json();
    if(!data){
      console.log("mesage not send");
      
    }
    else{
      alert("message send");
      setUserData({...userData,message:""})
    }
  }


  return (
    <>
    <div className='contact_info'>
          <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                   {/* phone number */}
                    <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <img src={phone} className='cimg'></img>
                      <div className='contact_info_content'>
                      <div className='contact_info_title'>
                        Phone
                      </div>
                      <div className='contact_info_text'>
                       +91 1111 222 3333
                      </div>

                      </div>
                    </div>
                    {/* email*/}
                    <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <img src={email} className='cimg'></img>
                      <div className='contact_info_content'>
                      <div className='contact_info_title'>
                      Email
                      </div>
                      <div className='contact_info_text'>
                       aaaab@gmail.com
                      </div>

                      </div>
                    </div>
                    {/* address */}
                    <div className='contact_info_item d-flex justify-content-start align-items-center'>
                    <img src={address} className='cimg'></img>
                      <div className='contact_info_content'>
                      <div className='contact_info_title'>
                       Address
                      </div>
                      <div className='contact_info_text'>
                       Pune,India
                      </div>

                      </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
   {/* contact us form */}
  <div className='contact_form'>
    <div className='container'>
       <div className='row'>
        <div className='col-lg-10 offset-lg-1'>
            <div className='contact_form_container py-5'>
                <div className='contact_form_title'>
                    Get in Touch
                    <form  
                    method='POST'   id='contact_form'>
                    <div className='contact_form_name d-flex justify-content-between align-item-center'>
                <input type='text'
                 id='contact_form_name' value={userData.name} name="name" onChange={handleChanges}className='contact_form_name input_field' placeholder='Your name ' required="true"/>

                <input type='email'id='contact_form_email' value={userData.email} onChange={handleChanges} className='contact_form_email input_field' name="email" placeholder='Your email ' required="true"/>

                <input type='number' id='contact_form_phone' value={userData.phone} onChange={handleChanges} className='contact_form_phone input_field' name="phone" placeholder='Your Phone Number' required="true"/>
                

                    </div>
                    <div className='contact_form_text mt-5'>
                        <textarea className='text_field contact_form_message' name="message"  value={userData.message} onChange={handleChanges}  placeholder="message" cols="30" rows="10"></textarea>
                    </div>
                    <div className='contact_form_button'>
                        <button 
                        onClick={contactForm}
                        type='submit' className='button contact_submit_button'>Send Message</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
    </div>
  </div>
    </>
  )
}

export default Contact

