const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    email:{
        type:String,
        reuired:true
    },
    phone:{
        type:Number,
        reuired:true
    },
    work:{
        type:String,
        reuired:true
    },
    password:{
        type:String,
        reuired:true
    },
    cpassword:{
        type:String,
        reuired:true
    }
})



//we are hashing password

userSchema.pre('save',async function(next) {
  console.log("hashhhh");
  
   if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,12);
    this.cpassword=await bcrypt.hash(this.cpassword,12);
   }
   next();
})

const User=mongoose.model('USER',userSchema);
module.exports=User;