import React ,{useContext} from "react"
import Task from "./Task"
import AddItem from "./AddItem"
import TasksContext from "../context/TasksContextProvider"

export default function Main() {
    const {todos} = useContext(TasksContext)
    return (
        <div className="task">
            <h3>Tasks</h3>
           <AddItem  />
            
            {todos && todos?.length ? todos.map(item =>
                <Task key={item.id} item={item} />
                
                ):<h2>Task is empty.</h2>
            }
           
         </div>
     )
}
