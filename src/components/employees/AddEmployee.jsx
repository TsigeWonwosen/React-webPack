import React, { useContext} from 'react'
import EmployeeContext from '../../context/EmployeeContextProvider'

function AddEmployee() {
    
  const { handleChange, handleAdd, handleEditSubmit, info, isEdit } = useContext(EmployeeContext)
  
  const handleSubmit = (e) => {
     e.preventDefault()
  }

  
  return (
      <form onSubmit={handleSubmit} className="addEmployee">
              
          <div className='input'>
          <label htmlFor="">Name : </label>
          <input name='name' type = "text" placeholder='Write your name' onChange={handleChange} value={info.name}/>
          </div>
              
           <div className='input'>
          <label htmlFor="">Age :</label>
          <input name='age' placeholder='Age' type = "text" onChange={handleChange} value={info.age}/>
          </div>

           <div className='input'>
          <label htmlFor="">Adress :</label>
          <input name='address' placeholder='Italy , turin' type = "text" onChange={handleChange} value={info.address}/>
          </div>

           <div className='input'>
          <label htmlFor="">Email :</label>
          <input name='email' placeholder='Email ..' type = "text" onChange={handleChange} value={info.email}/>
          </div>

      {isEdit && <button type='button' onClick={ () => handleEditSubmit(info._id,info)} className='add' disabled={!info.name || !info.email}>Edit Employee</button>}
      {!isEdit && <button type='button' onClick={ () => handleAdd(info)}  className='add' disabled={!info.name || !info.email}>Add Employee</button>}
    </form>
  )
}

export default AddEmployee