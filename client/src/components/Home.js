import React, { useState,useEffect } from 'react'

const Home = () => {
  const [userData,setUserData]=useState('')
  const[show,setShow]=useState(false);
  
  const userHome=
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
    setUserData(data.name)
    setShow(true)
    

    if(res.status !== 200){
      const error=new Error(res.error || 'falied to fetch');
      throw error;
    }
    
    
  } catch (err) {
    console.log(err);
    
    
  }
}


  useEffect(()=>{
       userHome();
  },[]);
  return (
    <>
         <div className='home-page'>
          <div className='home-div'>
          <p className='pt-5'>WELCOME</p>
          <h1>{userData}</h1>
          <h2>{show?"Happy to see you Back":"We are the MERN Developer"}</h2>
            </div> 
         </div>
        
    </>
  )
}

export default Home