import React, { useRef} from 'react'
import { useTaskContext } from '../../context/TasksContextProvider'


function AddItem( ) {
  const {addTask,handleChange,task} = useTaskContext()
  const inputRef = useRef()
  const canSubmit = Boolean(task)
  return (
    <form onSubmit = {addTask} >
        <input autoFocus name="todo" type="text" ref={inputRef} placeholder = "Add item" value={task} onChange={(e) => handleChange(e)} />
        <button type = "submit" disabled = {!canSubmit} onClick={()=> inputRef.current.focus()}>Add Task</button>
    </form>
)
}

export default AddItem