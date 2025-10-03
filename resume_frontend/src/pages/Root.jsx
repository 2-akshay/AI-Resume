import React from 'react'
import { Outlet } from 'react-router'
import Navabar from '../components/Navabar'
import Footer from '../components/Footer'



function Root() {
  return (
    <div>
        {/* navabar*/ }
        <Navabar/>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root