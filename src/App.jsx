import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const addnum = () => {
    setCount(count + 1)
  }
  const removenum = () => {
    if (count === 0) {
      0
    } else {
      setCount(count - 1)

    }
  }
  return (
    <>

      <h1>Counter App</h1>


      <button onClick={addnum}>Add</button>{count} <button onClick={removenum}>Sub</button>

    </>
  )
}

export default App
