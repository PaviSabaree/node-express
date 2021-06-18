const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Home: Hello world')
})
app.get('/users',(req,res)=>{
    res.send('User: Hi!')
})
app.listen(3000)