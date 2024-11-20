

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
    const location = useLocation(); 
    const navigate = useNavigate();
    const {userDetails} = location.state; 

    const [updatedDetails, setUpdatedDetails] = useState(userDetails);
    const id = userDetails._id
    console.log(id, "ele")

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedDetails({ ...updatedDetails, [name]: value });
    };

    const backLogin = () => {
        navigate("/")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`https://ajackus-backend-fbps.onrender.com/update/${id}/users`, updatedDetails);
            alert("User updated successfully");
            navigate("/"); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="formContainer">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 form">
                    <label htmlFor="UserID" className="form-label">User ID</label>
                    <input type="text" className="form-control" id="UserID" name="id" value={updatedDetails.id} onChange={handleChange} required />
                </div>
                <div className="mb-3 form">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" name="firstName" value={updatedDetails.firstName} onChange={handleChange} required />
                </div>
                <div className="mb-3 form">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" name="lastName" value={updatedDetails.lastName} onChange={handleChange} required />
                </div>
                <div className="mb-3 form">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={updatedDetails.email} onChange={handleChange} required />
                </div>
                <div className="mb-3 form">
                    <label htmlFor="department" className="form-label">Department</label>
                    <select name="department" id="department" value={updatedDetails.department} onChange={handleChange} required>
                        <option value="" disabled>Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="MECHANICAL">MECHANICAL</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary m-1">Update User</button>
                <button type="submit" className="btn btn-secondary m-1" onClick={backLogin}>Back</button>
            </form>
        </div>
    );
};

export default UpdateForm;
