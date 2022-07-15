import React from 'react'
// import { useDispatch } from 'react-redux'
import Commoncomp from '../../../core/Commoncomp/Commoncomp'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../redux/HomePage/HomePage.action'
import { useEffect } from 'react'
import Layout from '../../../Layout/Layout'
const KidsPage = () => {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  let productdata = useSelector((state)=>state.HomePageReducer.productsData.data) || []
  return (
    <Layout>
<Commoncomp data={productdata} text={"KIDS'S WEAR"} index={60}/>
    </Layout>
    
  )
}



export default KidsPage