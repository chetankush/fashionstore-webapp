import React from 'react'
import './App.scss'
import SearchPage from './pages/SearchPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductPage from './pages/ProductPage'


const App = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>        
    <Route path="/" element={<SearchPage/>}/>
    <Route path="/productpage" element={<ProductPage/>}/>
    </Routes>

    </BrowserRouter>
    </>
    )
}

export default App
