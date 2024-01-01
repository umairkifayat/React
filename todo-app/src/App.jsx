import { useState } from 'react'


function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);


function addtodo(event) {
  event.preventDefault()
  todo.push(text);
  setTodo([...todo])
  console.log(todo);

}



  return (
    <>
    <h1>Todo App</h1>
    <form onSubmit={addtodo}>
      <input type="text" onChange={(e)=> setText(e.target.value)} value={text}/>
      <button type='submit'>Add</button>
    </form>
    <ul>
      {todo.map((item,index)=>{
return <li key={index}>{item}
<button>Delete</button>
<button>edit</button>
</li>
})}
    </ul>
    </>
  )
}

export default App
