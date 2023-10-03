import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import EmployeeContext from '../../context/EmployeeContextProvider'

function EmployeeCard({employee}) {
  const {handleDelete} = useContext(EmployeeContext)
    
  
  return (
    <section className="singleEmployee">
      <div className="empInfo">
        <span><h5>Name : {employee.name}</h5></span>
        <span><p> Email : {employee.email}</p></span>
        <span><p> Address : {employee.address}</p></span>
      </div>
      <div>
        <button className = "add" onClick={() => {handleDelete(employee._id)}}> Delete </button>
        <Link to={`/admin/${employee._id}`} > <button className='add'>Edit</button> </Link>
        <Link to={`/admin/single/${employee._id}`} > <button className='add'>See More</button> </Link>
      </div>
    </section>
  )
}

export default EmployeeCard