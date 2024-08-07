const express=require('express');
const router=express.Router();
require('../db/conn');
const User=require("../model/userSchema");


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
    res.status(422).json({error:"user registered successfully"});
       
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
    try{
      const {email,password}=req.body;
      if(!email || !password){
        return res.status(400).json({error:"pls fill the data"})
      }
      const userlogin=await User.findOne({email:email});

      console.log(userlogin);
      if(!userlogin){
        res.status(400).json({error:"user error"})
      }else{
        res.json({message:"user signin sucessfully"})
      }
      
      

    }
    catch(err){
     console.log(err);
     
    }
})



module.exports=router;