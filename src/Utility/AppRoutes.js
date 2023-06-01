import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Bollywood, Hollywood, Technology, Fitness, Food } from '../Routes/Routes'
import Dynamic from '../Routes/Dynamic'
import { Footer } from '../Components/Common'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path="/dynamic/:productId" element={<Dynamic/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
