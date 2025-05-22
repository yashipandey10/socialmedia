import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import NotFound from './pages/NotFound'
import Messaging from './pages/Messaging'
import Registerpage from './pages/Registerpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login/' element={<Loginpage/>} />
        <Route path='/messaging/' element={<Messaging/>} />
        <Route path='/register/' element={<Registerpage/>} />
      </Routes>
    </>
  )
}

export default App
