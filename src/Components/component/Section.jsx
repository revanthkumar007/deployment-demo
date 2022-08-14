import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import AddDetails from './Pages/AddDetails'
import Show from './Pages/Show'
import PdfFile from './PDF/PdfFile'
function Section() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<AddDetails/>}/>
      <Route path='/show' element={<Show/>}/>
      <Route path='/pdf' element={<PdfFile/>}/>
     </Routes>
    </>
  )
}

export default Section