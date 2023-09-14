import React, { useState ,useRef} from 'react'
import colorNames from 'colornames';

import {capitalizeEveryWord} from '../../helpers/toCamelCase';
import('./box.css')

function BoxColor() {
    const [color, setColor] = useState("")
    const [colorName, setColorName] = useState("")

    const inputRef = useRef()

    const handleChange = (e) => {
        setColor(e.target.value)
        setColorName(colorNames(e.target.value))
    }
    const submitBackground = (e) => {
        e.preventDefault()
    }

  return (
      <div className='box'>
          <section className='boxInside' style={{background:color}}>
          <p>{color? capitalizeEveryWord(color) : "Empty Value"} </p>  
           <p> {colorName? colorName : ""}</p>
            </section>
        <form onSubmit={submitBackground} >
            <input autoFocus name="color" type="text" ref={inputRef} placeHolder = "Add Color Name" value={color} onChange={(e) => handleChange(e)} />
        </form>
      </div>
  )
}
export default BoxColor