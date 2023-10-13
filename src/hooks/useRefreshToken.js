import { useState } from 'react'
import useAuth from './useAuth'
import axios ,{axiosPrivate} from '../api/axios'
import Cookies from 'js-cookie';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth()
    const [value, setValue] = useState({refreshToken:""})

    const getRefreshToken = async () => {

        try {
            
            const response = await axios.get('/employees/refresh',{
                withCredentials: true
            })
    
            setValue(prvState => {
                console.log("Old Refresh Token :" + prvState.refreshToken)
                console.log("New Refresh Token : " + response.data.accessToken)
                return {...prvState,refreshToken : response.data.accessToken}
            })
            
            return response?.data
        } catch (error) {
           console.error(error) 
        }

    }
   
  return  getRefreshToken;
    
  
}

export default useRefreshToken