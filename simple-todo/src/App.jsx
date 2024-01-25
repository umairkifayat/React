import React, { useRef ,useState} from 'react'
import Card from './card'


const App = () => {

  const todoval = useRef()
  const [todo , settodo] = useState([])
  function addtodo(event) {
    event.preventDefault()
    console.log(todoval.current.value);
    todo.push(todoval.current.value)
    settodo([...todo])

    
  }
  return (
    
   <>
   <form onSubmit={addtodo}>
    <h1>todo app</h1>
    <input type="text" ref={todoval} />
    <button type="submit" >Add more</button>
       </form>
       {todo.length > 0 ? todo.map((item, index)=>{
        return <Card title={item} key={index} />
       }) : <h1>No data Found</h1>}
   </>
  )
}

export default App
