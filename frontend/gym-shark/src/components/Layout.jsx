import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
          <main className='min-vh-100'>
              <Outlet />
          </main>
      <Footer />
    </div>
  )
}

export default Layout