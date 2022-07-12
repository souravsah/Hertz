import React,{useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {getAdddata, getNewArrivalsProducts} from './../../../redux/HomePage/HomePage.action'
import { useDispatch, useSelector } from "react-redux";
const SliderImage = () => {
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAdddata())
    dispatch(getNewArrivalsProducts())
  },[])
    
  let Addata = useSelector((state)=>state.HomePageReducer.addData.data) || []
  console.log(Addata);
  let settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows:false,
        infinite: true,
        speed: 1500,
      };
    
  return (
    <Slider {...settings}>
      {Addata.map((item,idx)=>
      <img src={`${item.addImageLink}`} alt="" />
     )}

    </Slider>

  )
}

export default SliderImage