import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddProductForm from './components/addProductForm'
import ViewProduct from './components/viewProduct'
import UpdateProductForm from './components/UpdateProductForm'
import { useSelector } from 'react-redux'
import Auth from './components/authentication/auth'



const App = () => {

  const isAuth = useSelector((state) => state.user.isAuth)

  return (
    <div>
      <div className='navbar'><p>Navbar</p></div>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isAuth ? <ViewProduct /> : <Auth />} />
          <Route path='/addProduct' element={<AddProductForm />} />
          <Route path='/UpdateProduct' element={<UpdateProductForm />} />
          <Route path='/viewAllProduct' element={<ViewProduct />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App