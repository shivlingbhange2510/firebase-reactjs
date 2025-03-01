import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { Route, Routes } from "react-router-dom";
// import { SignUp } from './components/SignUp'
// import { Login } from './components/Login'
import { DashBoard } from './components/DashBoard'
import { Navbar } from './components/Navbar'
function App() {

  return (
    <>
    <Navbar/>
   <Routes>
				<Route path="/" element={<DashBoard />} />
				<Route path="/signup" element={<SignUp/>} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Login />} />

        {/* logout */}
		</Routes>
    
    {/* <hr />
    <h3>Login form comp</h3>
    <Login/> */}
    </>
  )
}

export default App
