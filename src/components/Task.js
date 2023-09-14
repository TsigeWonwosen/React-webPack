import React from 'react'

export default function Task({item,handleClick,onChange}) {
  return (
    <item>
          <span>
                <input type="checkbox" name={item.name} id={item.id} checked={item.completed} onClick={ ()=> onChange(item.id)} />
                <label style={{textDecoration :item.completed ?"line-through":null }}>{item.item}</label>
          </span>
          <button className = "removeItem" onClick={()=>handleClick(item.id)}>X</button>
    </item>
)
}
