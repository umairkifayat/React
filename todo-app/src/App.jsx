import { useState } from 'react'


function App() {
  const [text, setText] = useState("")

function addtodo(event) {
  event.preventDefault()
  console.log(text);
  
}



  return (
    <>
    <h1>Todo App</h1>
    <form onSubmit={addtodo}>
      <input type="text" onChange={(e)=> setText(e.target.value)} />
      <button>Add</button>
    </form>
    </>
  )
}

export default App
