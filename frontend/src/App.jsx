import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { ToDos } from './components/ToDos'

function App() {
  const [todos, setToDos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
    const json = await res.json();
    setToDos(json.todos);
  })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <ToDos todos={todos}></ToDos>
    </div>
  )
}

export default App
