import React, { useEffect } from 'react'
import { NewArrivalcss } from './NewArrival.style'
import Itembox from '../../../core/Itembox/Itembox'
import Commoncomp from '../../../core/Commoncomp/Commoncomp'
import { useDispatch, useSelector } from 'react-redux'
import { getNewArrivalsProducts } from '../../../redux/HomePage/HomePage.action'

const NewArrival = () => {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNewArrivalsProducts())
  },[])
  let newarrivalsdata = useSelector((state)=>state.HomePageReducer.newarrivalData.data) || []
console.log(newarrivalsdata);
  return (
    <Commoncomp data={newarrivalsdata} text={"NEW ARRIVALS"}/>
  )
}

export default NewArrival