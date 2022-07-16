import React from 'react'
import { Cartcss, Crosscss } from './Cartcheckout.style'
import { GiTireIronCross } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { deletecartdata, getCartdata } from '../../redux/CartPage/Cart.actions';

const Cartcheckout = ({data}) => {
  console.log(data);
  let dispatch = useDispatch()
  const handleClick = (id) =>{
    console.log(id);
    dispatch(deletecartdata(id))    
  }
  return (
    <Cartcss>

        <div>
        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2018/5/23/7a32e5c1-6ac6-4219-984e-63cb68497fa21527075068613-Roadster-Men-Trousers-6171527075067295-1.jpg" alt="" />
        </div>
        <div>
            <h3>{data.productId.pName}</h3>
            <p>{data.productId.pOccasion}</p>
            <h3><p>Size {data.productId.pSize[0]}</p><p>Qty 1</p> </h3>
            <h3>Rs.{data.productId.pPrice}</h3>
        </div>
        <Crosscss onClick={()=>{handleClick(data._id)}}>
            <GiTireIronCross/>
          </Crosscss>
    </Cartcss>
  )
}

export default Cartcheckout