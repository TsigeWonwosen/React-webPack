import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Input from './Input'
import useAuth from './../../hooks/useAuth'
import axios from 'axios'

function Login() {
    const {setAuth} = useAuth()

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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // http://localhost:5000/employees/login
           const response = await axios.post('http://localhost:5000/employees/login', { email: values.userName, password: values.password })
            
            console.log(response.data)
            setAuth(response.data.foundEmp)
            setValues({ userName: "",
                password: ""
            })
            navigate('/admin');
            
        } catch (error) {
             console.error('Axios Error:', error);
        }
    }

  return (
      <section className='container'>
          <form onSubmit={handleSubmit} >
            <h4>Login</h4>
              {inputs.map(input => <Input key={input.id} {...input}
                  value={values[input.name]} handleChange={handleChange} />)}
             
              <button type='submit'>Login</button>
              <div className='redirect'>Don't have an account ?<Link to ="/signup">Register</Link></div>
          </form>
          
      </section> 
  )
}

export default Login