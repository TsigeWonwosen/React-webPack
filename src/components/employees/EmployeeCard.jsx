import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import EmployeeContext from '../../context/EmployeeContextProvider'

function EmployeeCard({employee}) {
  const {handleDelete} = useContext(EmployeeContext)
    
  
  return (
    <section  className="singleEmployee">
        <span>{employee.name}</span>
        <p>{employee.email}</p>
        <p>{employee.address}</p>
        <button className = "add" onClick={() => {handleDelete(employee._id)}}> Delete </button>
      <Link to={`/admin/${employee._id}`} > <button className='add'>Edit</button> </Link>
      <Link to={`/admin/single/${employee._id}`} > <button className='add'>See More</button> </Link>
    </section>
  )
}

export default EmployeeCard