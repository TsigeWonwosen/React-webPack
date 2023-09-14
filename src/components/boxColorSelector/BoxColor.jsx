import React, { useState ,useRef} from 'react'

import('./box.css')

function BoxColor() {
    const [color, setColor] = useState("")

    const inputRef = useRef()

    const handleChange = (e) => {
        setColor(e.target.value)
    }
    const submitBackground = (e) => {
        e.preventDefault()
    }

  return (
      <div className='box'>
          <div className='boxInside' style={{background:color}}></div>          
        <form onSubmit={submitBackground} >
            <input autoFocus name="color" type="text" ref={inputRef} placeHolder = "Add Color Name" value={color} onChange={(e) => handleChange(e)} />
        </form>
      </div>
  )
}
export default BoxColor