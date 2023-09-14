import React, { useEffect, useState } from 'react'

import ('./employee.css')

function Employee() {
    const [employees, setEmployees] = useState([]);
    const [isLoading ,setLoading] = useState(true)
    const [isError ,setError] = useState(false)

    const fetchEmployees = async () => {
        try {
            setLoading(true)
            setError(false)

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
        setTimeout(() => {
            fetchEmployees()
        }
        ,2000)
    }, [])
    
    const outPutData = () => {
        
        if (isError) return <p style={{ color: 'red' }}> Error Fetching Employees </p>;
        
        if (isLoading) {
            return "Loading ..."
        } else {
           let data =  employees.map(employee => <section className="singleEmployee">
                <span>{employee.name}</span>
                <p>{employee.email}</p>
                <p>{employee.address}</p>
           </section>)
            return data;
        }
    }
        
  return (
      <>
          <h4>List of Employees</h4>
          <div className="employee" >
    
          {outPutData()}
          </div>
    </>
  )
}

export default Employee