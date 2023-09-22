import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Input from './Input'

function Login() {

    const [values, setValues] = useState({
        userName: "",
        password: ""
    })

    
    const navigate = useNavigate()
    const inputs = [{
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
    const handleChange = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ userName: "",
            password: ""
        })
        navigate(-1);
    }

  return (
      <section className='container'>
          <form onSubmit={handleSubmit} >
            <h4>Login</h4>
              {inputs.map(input => <Input key={input.id} {...input}
                  value={values[input.name]} handleChange={handleChange} />)}
             
             <button type='submit'>Login</button>
          </form>
          
      </section> 
  )
}

export default Login