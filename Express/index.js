require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.send("Welcome to home page")
})

app.get('/login',(req,res)=>{
  res.send("<h1>Please Login to our page</h1>")
})

app.get('/user',(req,res)=>res.send('<h1>Hey user Welcome to our page</h1>'))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
