const express=require('express');
const router=express.Router();
require('../db/conn');
const User=require("../model/userSchema");
const authenticate =require("../middleware/authenticate")
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')
const cookieParser = require("cookie-parser");
router.use(cookieParser());


router.get('/',(req,res)=>{
    res.send('hello from the router server auth.js')
});


//using promises

// router.post('/register', (req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
// if(!name || !email|| !phone || !work || !password || !cpassword){
//     return res.status(422).json({error: "plz give correct data"});
    
// }
// User.findOne({email:email})
// .then((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error:"email already exist"});
//     }
//     const user=new User({name,email,phone,work,password,cpassword

//     });
//     user.save().then(()=>{
//         res.status(201).json({message:"user register sucessfully"})

//     }).catch((err)=>{
//           res.status(500).json({error:"failed to registered"})
//     }).catch(err=>{
//       console.log(err);
      
//     })

// })


// });

//using async await

router.post('/register', async(req,res)=>{
 
    const {name,email,phone,work,password,cpassword}=req.body;
if(!name || !email|| !phone || !work || !password || !cpassword){
    return res.status(422).json({error: "plz give correct data"});
    
}
try{

   const userExist=await User.findOne({email:email})
   if(userExist){
    return res.status(422).json({error:"email already exist"});
   }else if(password != cpassword){
    return res.status(422).json({error:"password are not matching"});
   }else{
    const user=new User({name,email,phone,work,password,cpassword})
    await user.save();
    res.status(201).json({error:"user registered successfully"});
       
   }
   
   
   
}
catch(err){
console.log(err);

}


});


//login route

router.post('/signin',async(req,res)=>{
    // console.log(req.body);
    // res.json({message:"awsome"})
    let token;
    try{
      const {email,password}=req.body;
      if(!email || !password){
        return res.status(400).json({error:"pls fill the data"})
      }


      const userlogin=await User.findOne({email:email});

      

      if(userlogin){
        const plainPassword = String(password);
            const hashedPassword = String(userlogin.password);

            console.log('Plain Password (string):', plainPassword);
            console.log('Hashed Password from DB:', hashedPassword);
            console.log('Type of Plain Password:', typeof plainPassword);
            console.log('Type of Hashed Password:', typeof hashedPassword);

            const isMatch = await bcrypt.compare(plainPassword, hashedPassword);


           
      
            

        if(!isMatch){
          res.status(400).json({error:"Invalid Credientials pass"})
        }
        const token =await  userlogin.generateAuthToken();
        console.log(token);

        res.cookie('jwtoken',token,{
          expires:new Date(Date.now()+25892000000),
          httpOnly:true
        });
            
        
        
          res.json({message:"user signin sucessfully"});
        
      }
      else{
        res.status(400).json({error:"Invalid Credientials"});
      }
    

      
      


      
      
      

    }
    catch(err){
     console.log(err);
     
    }
})


router.get('/about',authenticate,(req,res)=>{
  console.log('hello my about');
  res.send(req.rootUser);
  
  
})


// user data for contact us form
router.get('/getdata',authenticate,(req,res)=>{
  console.log('hello my about');
  res.send(req.rootUser);
})


// contact us page
router.post('/contact', authenticate,async(req, res) => {
  try {

    const {name,email,phone,message}=req.body;
    if(!name || !email || !phone || !message){
      console.log("error in contact form");
      
      return res.json({error:"plz fill the contact form"})
    }
    const userContact= await User.findOne({_id:req.userID})
    if(userContact){
      

      const userMessage=await userContact.addMessage(name,email,phone,message);
      await userContact.save();
      res.status(201).json({message:"user contact sussecfully"})
    }
  } catch (error) {
    console.log(error);
    
  }
});

router.get('/logout',(req,res)=>{
  console.log('hello my logout Page');
  res.clearCookie('jwtoken',{path:'/'})
  res.status(200).send('User Logout');
  
  
});



module.exports=router;