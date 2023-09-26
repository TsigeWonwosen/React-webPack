import React, { useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Employee} from './apiRequestEmployee'


function EmployeeInfo() {
    const [employee, setEmployee] = useState({});

    let{ id} = useParams()
    const getEmployee = async () => {
        const employee = await Employee(id) 
        setEmployee(employee.data.data)
    }
    
    useEffect(() => {
        getEmployee()
    },[id])

  return (
    <section  className="singleEmployee container">
        <span>Name : {employee.name}</span>
        <p>Email :{employee.email}</p>
        <p>Address :{employee.address}</p>
        <p>Age : {employee.age}</p>
      <Link to={`/admin/`} > <button className='add'>Go Back</button> </Link>
    </section>
  )
}

export default EmployeeInfo