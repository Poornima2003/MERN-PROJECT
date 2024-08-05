const express =require('express');
const app=express();


app.get('/',(req,res)=>{
res.send(`hello world from the server`)
});

// about me
app.get('/about',(req,res)=>{
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


app.listen(3000,()=>{
    console.log(`server is running at port 3000`);
    
})

