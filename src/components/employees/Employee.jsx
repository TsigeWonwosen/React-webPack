import React, { useEffect, useState } from 'react'
import { createEmployee, deleteEmployee, updateEmployee } from './apiRequestEmployee'
import AddEmployee from './AddEmployee';
import ('./employee.css')

function Employee() {
    const [employees, setEmployees] = useState([]);
    const [isEdit, setIsEdit] = useState(false)
    const [isLoading ,setLoading] = useState(true)
    const [isError ,setError] = useState(false)
    const [info, setInfo] = useState({name:"",age:"",address:"",email:""})

    

    const fetchEmployees = async () => {
        try {

            const resp = await fetch('http://localhost:5000/users');
            if (!resp.ok) throw Error("Data fetch Error");
            const employees = await resp.json();
            setEmployees(employees)
            setLoading(false)
            
        } catch (error) {
            setError(true)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    
    useEffect(() => {
            fetchEmployees()
        }, [employees.name, employees.address,isEdit])
        
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (info.address && info.name && info.address && info.age) {
            createEmployee(info)
            const newEmployee = [...employees, info]
            setEmployees(newEmployee)
            setInfo({name:"",age:"",address:"",email:""})
        } else {
            console.log("user info required.")
        }

    }
    const handleDelete = (id) => {
        deleteEmployee(id)
        const updatedEmployees = employees.filter((e) => e._id !== id);
    setEmployees(updatedEmployees);
    }

    const handleEdit = (id) => {
        setIsEdit(true)
        const editUser = employees.filter((e) => e._id === id);
        setInfo(editUser[0])
        updateEmployee(id,info)
        setIsEdit(false)
    }

    const outPutData = () => {
        
        if (isError) return <p style={{ color: 'red' }}> Error Fetching Employees </p>;
        
        if (isLoading) {
            return "Loading ..."
        } else {
            let data = employees.map(employee => <section
           key={employee._id}     className="singleEmployee">
                <span>{employee.name}</span>
                <p>{employee.email}</p>
               <p>{employee.address}</p>
               <button className = "add" onClick={() => {handleDelete(employee._id)}}> Delete </button>
               <button className="add" onClick={() => {handleEdit(employee._id)}}>{isEdit ? "Cancel":"Edit"} </button>
           </section>)
            return data;
        }
    }
        
  return (
      <>
          <h4>List of Employees</h4>
          <AddEmployee info={info} handleChange={handleChange} handleSubmit={handleSubmit} isEdit={ isEdit} />
          <div className="employee" >
    
          {outPutData()}
          </div>
    </>
  )
}

export default Employee