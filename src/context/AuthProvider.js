import React,{useState,createContext} from 'react'

export const Auth = createContext({})

function AuthProvider({children}) {
    const [auth, setAuth] = useState({})
  return (
    <Auth.Provider value={{auth,setAuth}}>{children}</Auth.Provider>
  )
}

export default AuthProvider