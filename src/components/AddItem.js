import React, { useRef,useContext } from 'react'
import TasksContext from '../context/TasksContextProvider'

function AddItem( ) {
  const {addTask,handleChange,task} = useContext(TasksContext)
    const inputRef = useRef()
  return (
    <form onSubmit = {addTask} >
        <input autoFocus name="todo" type="text" ref={inputRef} placeholder = "Add item" value={task} onChange={(e) => handleChange(e)} />
        <button type = "submit" onClick={()=> inputRef.current.focus()}>Add Task</button>
    </form>
)
}

export default AddItem