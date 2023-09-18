import React from 'react'

import { EmployeeContextProvider } from '../../context/EmployeeContextProvider';
import EmployeeHome from './EmployeeHome';
import('./employee.css')

function Employee() {
    
    return (
          <EmployeeHome/>
  )
}

export default Employee