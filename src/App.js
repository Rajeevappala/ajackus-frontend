import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import UpdateUser from "./Components/UpdateUser/UpdateUser"
import { BrowserRouter, Route , Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Home/>} />
          <Route exat path = "/update/:id/users" element = {<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
