import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./UserList.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Userist = (props) => {
    const navigate = useNavigate()
    const {userDetails , onDelete} = props 
    const {id , firstName , lastName , email , department, _id} = userDetails

    const deleteList = () => {
        onDelete(_id)
    }

    const updateUser = () => {
        navigate(`/update/${_id}/users` , {state : {userDetails}})
        console.log(_id)
    }

  return (
    <li className='listContainerEle'>
        
        <h4 className= "studentId">STUDENT ID : {id}</h4>
        <h3 className='name'>NAME: {firstName} {lastName}</h3>
        <p className='para'>Email: {email}</p>
        <p className='para'>DEPARTMENT: {department}</p>
        <div>
            <button className='btn btn-secondary m-1 ' onClick={updateUser}>Update <FaEdit/></button>
            <button className='btn btn-danger m-1' onClick={deleteList}>Delete <MdDelete/></button>
        </div>
    </li>
  )
}

export default Userist
