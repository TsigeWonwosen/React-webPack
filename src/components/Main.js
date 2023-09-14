import React ,{ useEffect, useState } from "react"
import Task from "./Task"
import AddItem from "./AddItem"



const Todo = JSON.parse(localStorage.getItem("tasks")) || [];

export default function Main() {
    const [todos, setTodos] = useState(Todo)
    const [task, setTask] = useState("")

    const handleClick = (id) => {
        const newTodo = todos.filter(todo => todo.id !== id) 
        setTodos(newTodo)
        }
    
    const onChange = (id) => {

        const updateTodos = todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} : todo) 
        setTodos(updateTodos)
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const addTask = (e) => {
          e.preventDefault();
        if (!task) return;

    const newTask = {
                id: new Date(),
                item: task,
                completed: false
                  }
        setTodos(preTodo => [...preTodo, newTask])
        setTask("")
    }

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(todos))
    },[todos])
    return (
        <div className ="task">
            <h3>Tasks</h3>
            <AddItem handleChange={handleChange} addTask={ addTask} task={task} />
            
            {todos?.length ? todos.map(item =>
                <Task item={item} key={item.id} onChange={onChange} handleClick={ handleClick} />
          
             ):<h2>Task is empty.</h2>
            }
         </div>
     )
}
