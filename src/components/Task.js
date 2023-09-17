import React, { useContext } from 'react'
import TasksContext from '../context/TasksContextProvider'


export default function Task({item}) {
      const {handleClick,handleToggle} = useContext(TasksContext)
  return (
    <section className='item'>
          <span>
                <input type="checkbox" name={item.name} id={item.id} checked={item.completed} onChange={ ()=> handleToggle(item.id)} />
                <label style={{textDecoration :item.completed ?"line-through":null }}> {item.item} </label>
          </span>
          <button className = "removeItem" onClick={()=>handleClick(item.id)}>X</button>
    </section>
)
}
