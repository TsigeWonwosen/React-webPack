import { useState } from 'react'
import useAuth from './useAuth'
import axios ,{axiosPrivate} from '../api/axios'
import Cookies from 'js-cookie';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth()
    const [value, setValue] = useState()

    const getRefreshToken = async () => {

        try {
            
            const response = await axios.get('/employees/refresh',{
                withCredentials: true
            })
            console.log(">>> " + response)
    
            setValue(prvState => {
                console.log("Old Refresh Token :" + auth.refreshToken)
                console.log("Refresh Token : " + response.data)
                return {...prvState,refreshToken:refreshToken}
            })
            
            return response?.data
        } catch (error) {
           console.error(error) 
        }

    }
   
  return  getRefreshToken;
    
  
}

export default useRefreshToken