const mongoose=require('mongoose');
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

const User=mongoose.model('USER',userSchema);
module.exports=User;