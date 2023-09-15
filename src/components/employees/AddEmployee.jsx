import React from 'react'

function AddEmployee({handleChange, handleSubmit,info,isEdit}) {
    

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

          <button type='submit' className='add'  disabled = {!info.name || !info.email}>{isEdit ? "Edit": "Add"}</button>

    </form>
  )
}

export default AddEmployee