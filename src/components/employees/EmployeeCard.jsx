import React, { useContext} from 'react'
import EmployeeContext from '../../context/EmployeeContextProvider'

function EmployeeCard({employee}) {
  const {handleDelete, handleEdit, isEdit} = useContext(EmployeeContext)
    
  return (
    <section  className="singleEmployee">
        <span>{employee.name}</span>
        <p>{employee.email}</p>
        <p>{employee.address}</p>
        <button className = "add" onClick={() => {handleDelete(employee._id)}}> Delete </button>
        <button className="add" onClick={() => {handleEdit(employee._id)}}>{isEdit ? "Cancel":"Edit"} </button>
    </section>
  )
}

export default EmployeeCard