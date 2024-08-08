const express=require('express');
const router=express.Router();
require('../db/conn');
const User=require("../model/userSchema");
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')


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
  let token;
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

      

      if(userlogin){
        const plainPassword = String(password);
            const hashedPassword = String(userlogin.password);

            console.log('Plain Password (string):', plainPassword);
            console.log('Hashed Password from DB:', hashedPassword);
            console.log('Type of Plain Password:', typeof plainPassword);
            console.log('Type of Hashed Password:', typeof hashedPassword);

            const isMatch = await bcrypt.compare(plainPassword, hashedPassword);



            const token =await  userlogin.generateAuthToken();
            console.log(token);
            

        if(!isMatch){
          res.status(400).json({error:"Invalid Credientials pass"})
        }else{
          res.json({message:"user signin sucessfully"});
        }
      }
      else{
        res.status(400).json({error:"Invalid Credientials"});
      }
    

      
      


      
      
      

    }
    catch(err){
     console.log(err);
     
    }
})



module.exports=router;