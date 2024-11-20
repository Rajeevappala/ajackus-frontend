import React , {useState , useEffect} from 'react'
import Userist from "../UserList/Userist"
import "./home.css"
import axios from "axios"

const Home = () => {

    const [userDetails , getStudentDetails] = useState({
        id: "",
        firstName : "",
        lastName : "",
        email : "",
        department : ""

    })

    const [students , setStudents] = useState([])

    useEffect(() => {
        fetchStudentsData();
    } , []);

    const fetchStudentsData = async() => {
        try {
            const response = await axios.get("https://ajackus-backend-fbps.onrender.com/users");
            setStudents(response.data)
            console.log(response.data)
        } catch (error) {
            
        }
    }

    const getUserDetails = (event) => {
        const {name , value} = event.target 
        getStudentDetails({...userDetails , [name] : value})
    }

    const submitForm = async(event) => {
        event.preventDefault()
        const response = await axios.post("https://ajackus-backend-fbps.onrender.com/postdata/users", userDetails);
        console.log(response.data.message)
        const newUser = response.data
        alert("User Added Successfully")
        setStudents([newUser , ...students])
        fetchStudentsData()
        getStudentDetails({
        id: "",
        firstName : "",
        lastName : "",
        email : "",
        department : ""
        })

    }

    const deleteUser = async(id) => {
        try {
            await axios.delete(`https://ajackus-backend-fbps.onrender.com/delete/${id}/users`)
            fetchStudentsData()
        } catch (error) {
            console.log(error)
        }
    }
    console.log(students)

  return (
    <div>
         <div className='homeContainer'>
      <div className='formContainer'>
          <form onSubmit={submitForm}>
            <div className="mb-3 form">
                    <label for="UserID" className="form-label">User ID</label>
                    <input type="text" className="form-control" id="UserID" placeholder='Enter User Id' name ="id" onChange = {getUserDetails} value = {userDetails.id} required/>
                </div>
                <div className="mb-3 form">
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" placeholder='Enter First Name' name = "firstName" value = {userDetails.firstName} required onChange = {getUserDetails}/>
                </div>
                <div className="mb-3 form">
                    <label for="lastname" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastname" placeholder='Enter last Name' name = "lastName"  onChange = {getUserDetails} value = {userDetails.lastName} required/>
                </div>
                <div className="mb-3 form">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@domain.com' name = "email" value = {userDetails.email} onChange = {getUserDetails} required/>
                </div>
                <div className="mb-3 form">
                <label for="department" className="form-label">Department</label>
                    <select name = "department" id = "department" onChange = {getUserDetails} value={userDetails.department} required>
                        <option value = "" disabled selected>Select Option</option>
                        <option value = "CSE">CSE</option>
                        <option value = "IT">IT</option>
                        <option value = "ECE">ECE</option>
                        <option value = "EEE">EEE</option>
                        <option value = "CIVIL">CIVIL</option>
                        <option value = "MECHANICAL">MECHANICAL</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
          </form>
          </div>
      </div>
    
        <div className='listContainer'>
            <ul className='ulContainer'>
                {
                    students.map(eachEle => (
                        <Userist userDetails = {eachEle} key = {eachEle._id} onDelete = {deleteUser}/>
                    ))
                }
            </ul>
        </div>
   
    </div>
   
  )
}

export default Home
