import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { Bsearch, First, Hamburger, Navbarcss, Second, Searchbar,List } from './Navbar.style';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authactions';

const Navbar = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()  
  let [toggle,setToggle]=useState(false);
  let [icon, setIcon] = useState(localStorage.getItem('jwt'))
  const handleClick = () =>{
  navigate('/signup')    
  }
  const handleWishlist = () =>{
    navigate('/wishlist')
  }
  const handleLogout = () =>{
    dispatch(logout())
    setIcon(localStorage.getItem('jwt'))
    alert('Logged Out Successfully...')
  }
  const handleCart = () =>{
    navigate('/cart')
  }
  return (
    <Navbarcss>
      <Hamburger onClick={()=>{
        setToggle(!toggle)
      }}>
        <GiHamburgerMenu/>
      </Hamburger>
      <First >
        <List toggle={toggle}>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>BEAUTY</li>
        </List>
      </First>
      <Bsearch>
        <BsSearch/>
      </Bsearch>
      <Searchbar>
        <input type="text" name="" id="" />
      </Searchbar>
      <Second>
        <ul>
        <li >
          
          {
            icon?<span><FiLogOut onClick={handleLogout}/></span>:<span> <CgProfile onClick={handleClick} /></span>
          }
          
        </li>
        <li onClick={handleWishlist}>
          <AiFillHeart/>
        </li>
        <li onClick={handleCart}>
          <BsFillBagCheckFill/>
        </li>
        </ul>
        
      </Second>
    </Navbarcss>
  )
}

export default Navbar