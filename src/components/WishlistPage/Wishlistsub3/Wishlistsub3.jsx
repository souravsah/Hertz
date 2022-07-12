import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Commoncomp from '../../../core/Commoncomp/Commoncomp'
import Itembox from '../../../core/Itembox/Itembox'
import { getWishlistdata } from '../../../redux/WishlistPage/WishlistPage.action'
const Wishlistsub3 = () => {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getWishlistdata())
  },[])
  let wishlistdata =  useSelector((state)=>state.WishlistReducer.wishlistData.data) || []
  console.log(wishlistdata);
  return (
    // <h1>bdh</h1>
    <Commoncomp data={wishlistdata} text={"WISHLIST"}/>
    // <Itembox data/>
  )
}

export default Wishlistsub3