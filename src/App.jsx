import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Hii </h1>
    <SignUp/>
    <hr />
    <h3>Login form comp</h3>
    <Login/>
    </>
  )
}

export default App
