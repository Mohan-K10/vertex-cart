import './App.css'
import { useState } from 'react'
import AddProduct from './components/AddProduct'
import SearchProduct from './components/SearchProduct'
import { Routes, Route } from 'react-router-dom'
import AddtoCart from './components/AddtoCart'

function App() {

  const [product, setproduct] = useState([])  

  return (
    <>
    <Routes>
      {/* <Route path='/' element={<App/>}/> */}  
      <Route path='/cart' element={<AddtoCart/>}/>
    </Routes>




    <div className='px-30 py-3'>
      <h1 className='font-semibold text-3xl'>Vertex Cart</h1>
        <AddProduct AllProducts={setproduct}/>
        <SearchProduct Product={product}/>
        
    </div>
    </>
  )
}

export default App
