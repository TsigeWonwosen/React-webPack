import React from 'react'
import useAuth from '../../hooks/useAuth'

function LogOut() {
    const {setAuth} = useAuth() 
  return (
   <button onClick={setAuth({})}>LogOut</button>
  )
}

export default LogOut