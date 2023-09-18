import axios from 'axios';
const URL = `http://localhost:5000/users`

export const createEmployee = async (info) => {
    try {
      const response = await axios.post(URL, info);
      return response.data
      
    } catch (error) {
      
      console.error('Error creating employee', error);
    }
          
  };

export const updateEmployee = async (id, updateInfo) => {
  const updateURL = `${URL}/${id}`;
  try {
    
    await axios.put(updateURL, updateInfo);
   
  }
  catch (error) {
  console.error('Error updating employee', error);
  }
  };

export const deleteEmployee = (id) => {
      const deleteURL = `${URL}/${id}`
    axios.delete(deleteURL)
        .then((res) => {
          // console.log(res.data.data)
      })
      .catch((error) => console.error('Error deleting employee', error));
  };

  