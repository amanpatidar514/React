import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let Counter = 15

  let [Counter, setCounter] = useState(15)

  const addValue = () => {
    if(Counter < 20) {
      Counter = Counter + 1
      console.log(Counter)
      setCounter(Counter)
    }
  }
  const removeValue = () => {
    if(Counter > 0) {
      Counter = Counter - 1
      console.log(Counter)
      setCounter(Counter)
    }
  }

  return (
    <>
     <h1>React with Aman</h1>
     <h2>Counter value : {Counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
