import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cartcheckout from '../../core/Cartcheckout/Cartcheckout'
import { getCartdata } from '../../redux/CartPage/Cart.actions'
import {  Paymentcss, Second, Unique,Buttoncss } from './Cart.style'

const Cart = () => {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCartdata())
  },[])
  return (
    <Second>
<Unique>
      <div>
    <h3>You have got 1 item for Rs.1299</h3>
      </div>
      <div>
      <Cartcheckout/>
  <Cartcheckout/>
  <Cartcheckout/>
  <Cartcheckout/>
      </div>
 
    </Unique>
    <Paymentcss>
      <ul>
        <li>
          <h3>Total MRP</h3>
          <h3>Rs.1699</h3>
        </li>
        <li>
          <h3>Discount on MRP</h3>
          <h3>-Rs.400</h3>
        </li>
        <li>
          <h3>Coupon Discount</h3>
          <h3>Apply Coupon</h3>
        </li>
        <li>
          <h3>Convenience Fee</h3>
          <h3>Rs.1299</h3>
        </li>
        <Buttoncss>PLACE ORDER</Buttoncss>
      </ul>
    </Paymentcss>
    </Second>
    
  
  )
}

export default Cart