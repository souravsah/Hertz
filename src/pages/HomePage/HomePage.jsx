import React, { Fragment } from 'react'
import SliderImage from '../../components/Hompage/Slider/SliderImage'
import Itembox from '../../core/Itembox/Itembox'
import Navbar from '../../core/Navbar/Navbar'

const HomePage = () => {
  return (
    <Fragment>
    <Navbar/>
    <SliderImage/>
    <Itembox/>
    </Fragment>
  )
}

export default HomePage