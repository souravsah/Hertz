import React from 'react'
import { Navigate, useNavigate } from 'react-router'
// import img from './../../../../public/img/user-login-icon-14.png'
import { Wishlistcss } from './Wishlistsub2.style'

const Wishlistsub2 = () => {
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate('/login')
  }
  return (
    <Wishlistcss>
    <div>
      <h1>PLEASE LOGIN</h1>
      <h3>Login to view items in your wishlist</h3>
      {/* <img src={img} alt="" /><br/> */}
      <button onClick={handleClick}>LOGIN</button>
    </div>
    </Wishlistcss>
      )
}

export default Wishlistsub2