import React, { useState } from 'react'
import AddEmployee from './AddEmployee'
import EmployeeLists from './EmployeeLists'

import './employee.css'


function Employee() {
  const [show, setShow] = useState(false)

  const showAdd = () => {
    setShow(prvStat => !prvStat)
  }

  return (
     <main className='employee'>
          <h4>List of Employees.</h4>
      {show ? <AddEmployee /> : <button style={{position :'absolute',right: 30,top:30}} className ="add" onClick = {showAdd}>Add</button>}
          <div className="employee" >
            <EmployeeLists/>
          </div>
      </main>
  )
}
``
export default Employee