import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import History from './Pages/History'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Page404 from './Pages/Page404'
import Register from './Pages/Register'
import Transfer from './Pages/Transfer'
import TransferAmount from './Pages/TransferAmount'
import TransferConfirmation from './Pages/TransferConfirmation'
import ReqAuth from './components/ReqAuth/ReqAuth'
import Auth from './components/Auth/Auth'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
        <Auth>
          <Login/>
        </Auth>
        }/>
        <Route path='/register' element={
        <Auth>
          <Register/>
        </Auth>
        }/>
          <Route path='/' element={
          <ReqAuth>
            <Home/>
          </ReqAuth>
          }/>
          <Route path='/history' element={
          <ReqAuth>
            <History/>
          </ReqAuth>
          }/>
          <Route path='/*' element={<Page404/>}/>
          <Route path='/transfer' element={
          <ReqAuth>
            <Transfer/>
          </ReqAuth>
          }/>
          <Route path='/transfer/:id' element={
          <ReqAuth>
            <TransferAmount/>
          </ReqAuth>
          }/>
          <Route path='/transfer/confirmation' element={
          <ReqAuth>
            <TransferConfirmation/>
          </ReqAuth>
          }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
