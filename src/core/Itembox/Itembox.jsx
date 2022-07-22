import React, { Fragment } from 'react'
import { Item ,Item1 ,Cart } from './Itembox.style'
import { AiFillHeart ,AiFillDelete} from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addtowishlist ,deleteWishlistdata} from '../../redux/WishlistPage/WishlistPage.action';
import { addtocart } from '../../redux/CartPage/Cart.actions';

const Itembox = ({data,text}) => {
  const dispatch = useDispatch()
  const handleWishlist = (x) =>{
    dispatch(addtowishlist({
      productId:x
    }))
    alert('Added to Wishlist')
  }
const handleDelete = (id) =>{
console.log(id);
dispatch(deleteWishlistdata(id))
}
const handleCart = (id) =>{
  dispatch(addtocart({
    productId:id
  }))
  alert('Added to Cart')
}
  return (
    <Fragment>
        <Item>
            <Item1>
            <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2018/5/23/7a32e5c1-6ac6-4219-984e-63cb68497fa21527075068613-Roadster-Men-Trousers-6171527075067295-1.jpg" alt="" />
            <Cart>
              {
                data.productId?<span onClick={()=>{handleDelete(data._id)}}><AiFillDelete/></span>:<span onClick={()=>{
                  handleWishlist(data._id)
                }}>
                  <AiFillHeart/>
                </span>
              }
            
            <span onClick={()=>{
              handleCart(data.productId?data.productId._id:data._id)
            }}>
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