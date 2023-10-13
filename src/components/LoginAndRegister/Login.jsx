import React, { useState ,useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Input, { InputElements } from './Input'
import useAuth from './../../hooks/useAuth'
import axios from '../../api/axios'

function Login() {
    const {setAuth} = useAuth()
    const [values, setValues] = useState({
        userName: "",
        password: ""
    })
    const [errorMess, setErrorMessage] = useState("")
    
    const navigate = useNavigate()
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";
   
    const handleChange = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

     useEffect(() => {
        setErrorMessage('');
    }, [values.userName, values.password])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/employees/login', { email: values.userName, password: values.password },{
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            const accessToken = response.data.accessToken;
            const roles = response.data.roles;
            setAuth({accessToken,roles,user:values.userName})
            setValues({ userName: "",
                password: ""
            })
            navigate(from, { replace: true });
            
        } catch (error) {
            if (!error?.response) {
                setErrorMessage("No server response!")
            } else if (error.response?.status === 400) {
                setErrorMessage("Missing userName and Password!")
                
            } else if (error?.response?.status === 401) {
                setErrorMessage("Unauthorized!")
                
            } else {
                setErrorMessage("Login Failed.")
                
            }
            console.error('Axios Error:', error);
        }
    }

  return (
      <section className='container'>
            <h4>Login</h4>
          <form onSubmit={handleSubmit} >
              {errorMess && <section className='errorMessage'>{errorMess}</section>}
              {InputElements.map(input => <Input key={input.id} {...input}
                  value={values[input.name]} handleChange={handleChange} />)}
             
              <button type='submit'>Login</button>
              <div className='redirect'>Don't have an account ?<Link to ="/signup">Register</Link></div>
          </form>
          
      </section> 
  )
}

export default Login