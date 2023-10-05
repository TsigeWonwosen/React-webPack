import React, { useState } from 'react'
import './formInput.css'
function Input(props) {
    const [focused, setFocused] = useState(false);
    const { id, handleChange,errorMessage, label, ...inputProps } = props
    
    const handleFocus = (e) => {
    setFocused(true);
  };

    return (
        <section className='formInput'>
            <label>{ label}</label>
            <input {...inputProps} onChange={handleChange}
            
            onBlur={handleFocus}
            onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
            }
            focused={focused.toString()}
            />
             {errorMessage && <span className="error">{errorMessage}</span>}
      </section>
  )
}
export const InputElements = [{
        id: 1,
        name: "userName",
        type: "text",
        placeholder: "User Name",
        label: "User Name",
        required: true,
        errorMessage: "User Name is required",
        required:true

    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        required: true,
        errorMessage: "Password is required",
        required:true
        }
    ] 
export default Input