import React, { Fragment } from 'react'
import { Item ,Item1 ,Cart } from './Itembox.style'
import { AiFillHeart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../redux/WishlistPage/WishlistPage.action';

const Itembox = ({data,text}) => {
  const dispatch = useDispatch()
  const handleWishlist = (x) =>{
    dispatch(addtocart({
      productId:x
    }))
    alert('Added to Wishlist')
  }

  return (
    <Fragment>
        <Item>
            <Item1>
            <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2018/5/23/7a32e5c1-6ac6-4219-984e-63cb68497fa21527075068613-Roadster-Men-Trousers-6171527075067295-1.jpg" alt="" />
            <Cart>
              {
                data.productId?<h1>hdh</h1>:<span onClick={()=>{
                  handleWishlist(data._id)
                }}>
                  <AiFillHeart/>
                </span>
              }
            
            <span>
              <BsFillBagCheckFill/>
            </span>
            </Cart>
            </Item1>
            <div>
             <h5>{data.pName || data.productId.pName}</h5>
             {/* <p>{data.pOccasion}</p> */}
             <p><span>Rs.{data.pPrice || data.productId.pPrice}</span></p>   
            </div>
        </Item>
    </Fragment>
  )
}

export default Itembox