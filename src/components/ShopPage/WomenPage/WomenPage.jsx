import React from 'react'
import Commoncomp from '../../../core/Commoncomp/Commoncomp'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../redux/HomePage/HomePage.action'
import { useEffect } from 'react'
import Layout from '../../../Layout/Layout'
const WomenPage = () => {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts())
  },[])
  let productdata = useSelector((state)=>state.HomePageReducer.productsData.data) || []
  return (
    <Layout>
<Commoncomp data={productdata} text={"WOMEN'S WEAR"} index={70}/>
    </Layout>
    
  )
}

export default WomenPage