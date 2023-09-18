import React ,{useContext} from 'react'
import AddEmployee from './AddEmployee';
import EmployeeLists from './EmployeeLists';
import EmployeeContext from '../../context/EmployeeContextProvider'

function EmployeeHome() {
  return (
      <>
          <h4>List of Employees</h4>
          <AddEmployee />
          <div className="employee" >
            <EmployeeLists/>
          </div>
      </>
  )
}

export default EmployeeHome