import { useState } from 'react'


function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);


function addtodo(event) {
  event.preventDefault()
  todo.push(text);
  setTodo([...todo])
  // console.log(todo);
setText('')
}

function del(i) {
  console.log('delete called');
  const newval = [...todo]
  
  newval.splice(i, 1)
  setTodo(newval)
  
}
function upd(i) {
  console.log('updated');
  let newarr = [...todo];
  const user = prompt('enter new value');
  newarr[i]= user
  setTodo(newarr)
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
<button onClick={()=> del(index)}>Delete</button>
<button onClick={()=> upd(index)}>edit</button>
</li>
})}
    </ul>
    </>
  )
}

export default App
