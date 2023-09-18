import React,{ createContext ,useState,useEffect} from "react";
import { createEmployee, deleteEmployee, updateEmployee } from '../components/employees/apiRequestEmployee'
import useFetch from '../hooks/useFetch'
const URL = 'http://localhost:5000/users'

const EmployeeContext = createContext();

export const EmployeeContextProvider = ({ children }) => {
    
    const [employees,setEmployees] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [info, setInfo] = useState({_id : "", name:"",age:"",address:"",email:""})
    const { data, isLoading, isError } = useFetch(URL);

    useEffect(() => {
        setEmployees(data)
    }, [data])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info,[name]:value})
    }

    
    const handleDelete = (id) => {
        deleteEmployee(id)
        const updatedEmployees = employees.filter((e) => e._id !== id);
    setEmployees(updatedEmployees);
    }

    const handleAdd = async (info) => {
       
        if (info.address && info.name && info.address && info.age) {
            const employeeAdded = await createEmployee(info)
            const newEmployee = [...employees, employeeAdded]
            setEmployees(newEmployee)
            setInfo({_id:"",name:"",age:"",address:"",email:""})
        } else {
            console.log("user info required.")
        }

    }
    const handleEdit = (id) => {
        setIsEdit(true)
        const editUser = employees.find(employee => employee._id === id);
        setInfo(editUser)
    }
    const handleEditSubmit = (id,info) => {
        updateEmployee(id, info)
        const newEmpl = employees.map(employee => employee._id === id ? info : employee);
        setEmployees(newEmpl);
        setInfo({_id : "",name:"",age:"",address:"",email:""})
        setIsEdit(false)
    }
    
    return (<EmployeeContext.Provider
        value={{ employees, setEmployees, isEdit, setIsEdit, info, setInfo, isLoading, isError, handleDelete, handleEdit, handleEditSubmit, handleAdd,handleChange}}>
        {children}
    </EmployeeContext.Provider >)
}

export default  EmployeeContext;