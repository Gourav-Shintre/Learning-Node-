import { useEffect, useState } from 'react'
import axios from  'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes').
    then((res)=>{
      setJokes(res.data)
    }).catch((err)=>{
      console.log(err);
      
    })
  },[jokes])

  return (
    <>
      <h1>Jokes : {jokes.length}</h1>
      <div>
        {jokes.map((item)=>(
          <div  key={item?.id}>
            <h2>{item.question}?</h2>
            <h4> {item.answer}</h4>
          </div>

          
        ))}
      </div>
    </>
  )
}

export default App
