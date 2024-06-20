import { useState } from 'react'
import Users from './Users.jsx'
import CreateUser from './CreateUser.jsx'
import UpdateUser from './UpdateUser.jsx'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
