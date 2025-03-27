import express from 'express';
import 'dotenv/config';
const app = express();

app.get("/",(req,res)=>{
    res.send("hello this is full stack app")
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            question:"what is your name",
            answer:"my name is john"
        },
        {
            id:2,
            question:"what is your age",
            answer:"my age is 25"
        },
        {
            id:3,
            question:"what is your location",
            answer:"my location is india"
        }
    ]
    res.send(jokes)
})
const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`server is runningon port ${port}`);
    
})