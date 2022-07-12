import React, { Fragment } from 'react'
import { Item ,Item1 ,Cart } from './Itembox.style'
// import Img from './../'
const Itembox = ({data}) => {
  return (
    <Fragment>
        <Item>
            <Item1>
            <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2018/5/23/7a32e5c1-6ac6-4219-984e-63cb68497fa21527075068613-Roadster-Men-Trousers-6171527075067295-1.jpg" alt="" />
            <Cart>ADD TO CART</Cart>
            </Item1>
            <div>
             <h5>{data.pName}</h5>
             {/* <p>{data.pOccasion}</p> */}
             <p><span>Rs.{data.pPrice}</span></p>   
            </div>
        </Item>
    </Fragment>
  )
}

export default Itembox