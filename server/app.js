const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express =require('express');
const app=express();

dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT=process.env.PORT;



//middleware

const middleware=(req,res,next)=>{
console.log('hello middleware');
next();

};


app.get('/',(req,res)=>{
res.send(`hello world from the server`)
});

// about me
app.get('/about',middleware,(req,res)=>{
    res.send('aboutme');
});

//contact
app.get('/contact',(req,res)=>{
    res.send('contact form');
})


//login
app.get('/signin',(req,res)=>{
    res.send('login here');
});

//register
app.get('/signup',(req,res)=>{
    res.send("register your account herrr")
})


app.listen(PORT,()=>{
    console.log(`server is running at port 3000`);
    
})

