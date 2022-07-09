import React, { Fragment } from 'react'
import Navbar from '../core/Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <Fragment>
    <Navbar/>
  {children}
    </Fragment>
  

  )
}

export default Layout