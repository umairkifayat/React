import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [counter,setCounter] = useState(0)

  function addvalue(params) {
    console.log('clicked');
    // counter = counter + 1
    setCounter(counter + 1)
  }
  function removevalue(params) {
    console.log('clicked');
if (counter ) {
  setCounter(counter - 1)
  
}else{
0
}
    // counter = counter + 1
  }

  return (
    <>
     <h1>Hello world</h1>
     <h2>counter value {counter}</h2>
     <button onClick={addvalue}>Add value</button>
     <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
