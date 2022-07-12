import React from 'react'
import { useState } from 'react'
import Wishlistsub1 from '../../components/WishlistPage/Wishlistsub1/Wishlistsub1'
// import Wishlistsub2 from './../../components/WishlistPage/Wishlistsub1/Wishlistsub2'
import Layout from './../../Layout/Layout'
import Wishlistsub2 from '../../components/WishlistPage/Wishlistsub2/Wishlistsub2'
const Wishlist = () => {
  let [data,setdata]=useState(localStorage.getItem('jwt'));
  return (
    <Layout>
  {data?<Wishlistsub1/>:<Wishlistsub2/>}

    </Layout>
      )
}

export default Wishlist