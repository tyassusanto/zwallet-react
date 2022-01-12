import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import History from './Pages/History'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Page404 from './Pages/Page404'
import Register from './Pages/Register'
import Transfer from './Pages/Transfer'
import TransferAmount from './Pages/TransferAmount'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/*' element={<Page404/>}/>
        <Route path='/transfer' element={<Transfer/>}/>
        <Route path='/transfer/id' element={<TransferAmount/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
