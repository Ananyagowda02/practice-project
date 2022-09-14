const hhtp = require('http');
const express = require('express');
const app = express();
require('./db/connection')

app.set('view engine','hbs')
app.use(express.static('../public/css'))//.. because the styles is inside the 2 different folders , i.e public and css
// in hbs files all the files will be /followed by the file name

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/home',(req,res)=>{
    res.render('home')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.use((req,res)=>{
    res.render('404')
})


app.listen(3000,()=>{
    console.log('listening to request of port 3000');
})