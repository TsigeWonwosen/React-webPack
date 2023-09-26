import React,{ useContext } from 'react';
import {Auth} from '../context/AuthProvider'

const useAuth = () => useContext(Auth)
  
export default useAuth;