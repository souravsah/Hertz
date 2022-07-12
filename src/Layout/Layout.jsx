import React, { Fragment } from 'react'
import Navbar from '../core/Navbar/Navbar'
import Footer from '../core/Footer/Footer'
const Layout = ({children}) => {
  return (
    <Fragment>
    <Navbar/>
  {children}
  <Footer/>
    </Fragment>
  

  )
}

export default Layout