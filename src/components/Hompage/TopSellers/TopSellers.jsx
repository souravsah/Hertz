import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Commoncomp from '../../../core/Commoncomp/Commoncomp'
import { getTopSellersProducts } from '../../../redux/HomePage/HomePage.action'

const TopSellers = () => {
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTopSellersProducts())
    },[])
    let topsellersdata = useSelector((state)=>state.HomePageReducer.topsellersData.data) || []
  return (
    <Commoncomp data={topsellersdata} text={"TOP SELLERS"}/>
  )
}

export default TopSellers