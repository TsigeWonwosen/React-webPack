import React, { useContext} from 'react'
import EmployeeContext from '../../context/EmployeeContextProvider'
import EmployeeCard from './EmployeeCard'

function EmployeeLists() {
  const { employees,isLoading,isError} = useContext(EmployeeContext)

  return (
      <>
        {isError && <h3 style={{ color: 'red' }}> Error Fetching Employees </h3> };
          {!isError && isLoading && <h3>Loading ...</h3>}
      {!isError && !isLoading && employees.map(employee => <EmployeeCard key={employee._id} employee={employee } />)         
        }
    
      </>
  )
}

export default EmployeeLists