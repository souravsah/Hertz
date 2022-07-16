import React, { useState } from 'react'
import Cart from '../../components/Cart/Cart'
import Wishlistsub2 from '../../components/WishlistPage/Wishlistsub2/Wishlistsub2'
import Wishlistsub3 from '../../components/WishlistPage/Wishlistsub3/Wishlistsub3'
import Layout from '../../Layout/Layout'
const Cartsub = () => {
  
  let [data,setdata]=useState(localStorage.getItem('jwt'));
  return (
    <Layout>
{data?<Cart/>:<Wishlistsub2/>}
    
    </Layout>
    
  )
}

export default Cartsub