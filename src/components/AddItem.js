import React,{useRef} from 'react'

function AddItem({ handleChange, addTask, task }) {
    const inputRef = useRef()
  return (
    <form onSubmit = {addTask} >
        <input autoFocus name="todo" type="text" ref={inputRef} placeholder = "Add item" value={task} onChange={(e) => handleChange(e)} />
        <button type = "submit" onClick={()=> inputRef.current.focus()}>Add Task</button>
    </form>
)
}

export default AddItem