import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main style={{minHeight: "80vh"}}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout