import React from 'react'
import AddEmployee from './AddEmployee';
import EmployeeLists from './EmployeeLists';
import { EmployeeContextProvider } from '../../context/EmployeeContextProvider';
import('./employee.css')

function Employee() {
    
    return (
      <EmployeeContextProvider>
          <h4>List of Employees</h4>
          <AddEmployee />
          <div className="employee" >
          <EmployeeLists/>
          </div>
      </EmployeeContextProvider>
  )
}

export default Employee