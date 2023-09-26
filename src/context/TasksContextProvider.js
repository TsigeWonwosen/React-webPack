import React ,{ createContext ,useContext,useState,useEffect} from "react";

const TasksContext = createContext();
export const useTaskContext = () => useContext(TasksContext)

const Todo = JSON.parse(localStorage.getItem("tasks")) || [];

export const TasksContextProvider = ({ children }) => {
    
    const [todos, setTodos] = useState(Todo)
    const [task, setTask] = useState("")

    const handleClick = (id) => {
        const newTodo = todos.filter(todo => todo.id !== id) 
        setTodos(newTodo)
        }
    
    const handleToggle = (id) => {

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
    }, [todos])
    
    return (
        <TasksContext.Provider value = {{todos,task,handleClick,handleToggle,handleChange,addTask}}>
            { children}
        </TasksContext.Provider>
        )
} 

export default  TasksContext;