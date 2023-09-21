import React, { useContext ,useEffect} from 'react'
import EmployeeContext from '../../context/EmployeeContextProvider'
import {useNavigate,useParams} from 'react-router-dom'


function EditEmployee() {
  const {info,setInfo,handleEditSubmit,employees} = useContext(EmployeeContext)

  const navigation = useNavigate();
  const { id } = useParams();
  const userToEdit = employees.filter(employee =>  employee._id == id )
    
  const handleSubmit = (e) => {
      e.preventDefault();
      handleEditSubmit(id, info);
      navigation(-1);
  }

  useEffect(() => {
        if (userToEdit) {
            setInfo(userToEdit[0]);
        }
    }, [])
    
    const handleEditChange = (e) => {
          const {name, value} = e.target;
      setInfo({ ...info, [name]: value })
    }
    
  return (
    <>
    <h4>Edit Employee  </h4>

     <form onSubmit={handleSubmit} className="addEmployee">
              
          <div className='input'>
          <label htmlFor="">Name : </label>
          <input name='name' type = "text" placeholder='Write your name' onChange={handleEditChange} value={info.name}/>
          </div>
              
           <div className='input'>
          <label htmlFor="">Age :</label>
          <input name='age' placeholder='Age' type = "text" onChange={handleEditChange} value={info.age}/>
          </div>

           <div className='input'>
          <label htmlFor="">Adress :</label>
          <input name='address' placeholder='Italy , turin' type = "text" onChange={handleEditChange} value={info.address}/>
          </div>

           <div className='input'>
          <label htmlFor="">Email :</label>
          <input name='email' placeholder='Email ..' type = "text" onChange={handleEditChange} value={info.email}/>
          </div>

      <button type='submit'  className='add' disabled={!info.name || !info.email}>Edit Employee</button>
    </form>
    </>
  )
}

export default EditEmployee