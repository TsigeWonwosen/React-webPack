import React, { useState } from 'react'
import Input from './Input';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {
   const [values, setValues] = useState({
      username: "",
      email:"",
      password: "",
      confirmPassword: "",
      birthday:""
   })
  
  const [error, setError] = useState('')
    const navigate = useNavigate()
  
  
    const inputs = [{id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[A-Za-z0-9]+@[A-Za-z-_]+[\.]+[a-zA-Z]{2,}$",
      //^[A-Za-z0-9]+@[A-Za-z-_]+\.[a-zA-Z]{2,}$  ^[a-zA-Z0-9]+@[a-zA-Z\.-]+\.[a-zA-Z]{2,}
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
    ]
    
  const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        
        const response = await axios.post('http://localhost:5000/employees',
          { name : values.username, email: values.email, password: values.password,birthDay : values.birthday })
        if (response) {
          navigate('/admin');
          setValues({
            username: "",
            email:"",
            password: "",
            confirmPassword: "",
            birthday:""
          })
        }
        if(!response.ok) throw Error(response.message)
      } catch (error) {
        setError(error.message);
        console.error(error)
      }
    }

    
  return (
      <section className='container'>
          <form onSubmit={handleSubmit} >
        <h4>Register</h4>
        <span>{ error && error}</span>
              {inputs.map(input => <Input key={input.id} {...input}
              value={values[input.name]}    handleChange={handleChange} />)}
        <button type='submit'>Register</button>
        <div className='redirect'>Already have an account ? <Link to="/login">Login</Link></div>
          </form>
          
      </section> 
  )

}

export default Register