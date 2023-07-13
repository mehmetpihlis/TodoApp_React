import './App.css'
import AddTodo from './Component/AddTodo'
import { useState, useEffect } from 'react'
import ListTodo from './Component/ListTodo';
import Axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    GetTasks();
  }, [todo])

  const GetTasks = async () => {
    const Tasks = await Axios.get("http://localhost:3000/todo");
    setTodo(Tasks.data);
  }

  const AddTask = async (task) => {
    await Axios.post("http://localhost:3000/todo", {
      "TodoName": task,
      "TodoConfirm": false
    });

    GetTasks();
  }
  
  return (
    <div>
      <AddTodo 
        AddTask={AddTask}
      />
      <ListTodo 
      todos= {todo}
      />
    </div>
  )
}

export default App
