import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCounter] = useState(0)

  const addValue = () => {
    
    if(count >= 20){
      setCounter(0  )
    }
    else{
      setCounter(count + 1)
    }
  }

  const resetValue = () => {
      setCounter(0) 
  }

  return (
    <>
      <h1>Click Counter</h1>
      <h2>counter value : {count}</h2>
      <button onClick={addValue}>click me to increase</button>
      <button onClick={resetValue}>click me to reset</button>
    </>
  )
}

export default App
