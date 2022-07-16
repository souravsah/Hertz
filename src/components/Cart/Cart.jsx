import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartcheckout from '../../core/Cartcheckout/Cartcheckout'
import { getCartdata } from '../../redux/CartPage/Cart.actions'
import {  Paymentcss, Second, Unique,Buttoncss } from './Cart.style'

const Cart = () => {
  let dispatch = useDispatch()

  let cartData = useSelector((state)=>state.CartReducer.cartData.data) || []
  useEffect(()=>{
    dispatch(getCartdata())
  },[])
  console.log(cartData)
  return (
    <Second>
<Unique>
      <div>
    <h3>{`You have got ${cartData.length} item for Rs.${cartData.reduce((acc,curr)=>{
                        return acc+=curr.productId.pPrice
                    },0)}`}</h3>
      </div>
      <div>
      {
        cartData.length?cartData.map((item,idx)=><Cartcheckout data={item}/>):<h1>Loading</h1>
      }
      </div>
 
    </Unique>
    <Paymentcss>
      <ul>
        <li>
          <h3>Total MRP</h3>
          <h3>Rs.{cartData.reduce((acc,curr)=>{
                        return acc+=curr.productId.pPrice
                    },0)}</h3>
        </li>
        <li>
          <h3>Discount on MRP</h3>
          <h3>-Rs.{0.2*cartData.reduce((acc,curr)=>{
                        return acc+=curr.productId.pPrice
                    },0)}</h3>
        </li>
        <li>
          <h3>Coupon Discount</h3>
          <h3>Apply Coupon</h3>
        </li>
        <li>
          <h3>Convenience Fee</h3>
          <h3>Rs.{cartData.reduce((acc,curr)=>{
                        return acc+=curr.productId.pPrice
                    },0)-(0.2*cartData.reduce((acc,curr)=>{
                      return acc+=curr.productId.pPrice
                  },0))}</h3>
        </li>
        <Buttoncss>PLACE ORDER</Buttoncss>
      </ul>
    </Paymentcss>
    </Second>
    
  
  )
}

export default Cart