import React, { useState } from 'react'
import Input from './Input';

function Register() {
   const [values, setValues] = useState({
     username: "",
     email:"",
    password: "",
    confirmPassword: "",
    birthday:""
})
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
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: "^[a-zA-Z0-9]+@[a-zA-Z\.-]+\.[a-zA-Z]{2,}$",
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
  return (
      <section className='container'>
          <form onSubmit={handleSubmit} >
          <h4>Register</h4>
              {inputs.map(input => <Input key={input.id} {...input}
              value={values[input.name]}    handleChange={handleChange} />)}
             <button type='submit'>Register</button>
          </form>
          
      </section> 
  )

}

export default Register