import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='body'>
      <div id='main'>
        <div id='num'>{count}</div>
        <div id='button'>
          <button onClick={()=>{setCount(count+1)}} id='increment'>Increment</button>
          <button onClick={()=>{setCount(count-1)}} id='decrement'>Decrement</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
