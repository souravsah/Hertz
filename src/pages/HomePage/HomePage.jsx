import React, { Fragment } from 'react'
import NewArrival from '../../components/Hompage/NewArrival/NewArrival'
import SliderImage from '../../components/Hompage/Slider/SliderImage'
import Itembox from '../../core/Itembox/Itembox'
import Navbar from '../../core/Navbar/Navbar'
import TopSellers from '../../components/Hompage/TopSellers/TopSellers'
const HomePage = () => {
  return (
    <Fragment>
    <Navbar/>
    <SliderImage/>
    <NewArrival/>
    <TopSellers/>
    </Fragment>
  )
}

export default HomePage