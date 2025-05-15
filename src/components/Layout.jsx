import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    <Header />
    <Outlet  />
    <Footer />
    </>
  )
}
