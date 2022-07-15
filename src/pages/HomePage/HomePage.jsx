import React, { Fragment } from 'react'
import NewArrival from '../../components/Hompage/NewArrival/NewArrival'
import SliderImage from '../../components/Hompage/Slider/SliderImage'
import Itembox from '../../core/Itembox/Itembox'
import Navbar from '../../core/Navbar/Navbar'
import TopSellers from '../../components/Hompage/TopSellers/TopSellers'
import Layout from '../../Layout/Layout'
const HomePage = () => {
  return (
    
<Fragment>
<Layout>
    <SliderImage/>
    <NewArrival/>
    <TopSellers/>
    </Layout>
    </Fragment>
    
    
  )
}

export default HomePage