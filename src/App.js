import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SliderImage from './components/Hompage/Slider/SliderImage'
import Navbar from './core/Navbar/Navbar'
import GlobalStyle from './globalStyle'
import { Provider } from 'react-redux'
import store from "./store"
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Forgotpassword from './core/ForgotPassword/Forgotpassword';
import Forgotpasswordpage from './pages/ForgotPasswordPage.jsx/Forgotpasswordpage';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import MenPage from './components/ShopPage/MenPage/MenPage';
import WomenPage from './components/ShopPage/WomenPage/WomenPage';
import KidsPage from './components/ShopPage/KidsPage/KidsPage';
import BeautyPage from './components/ShopPage/BeautyPage/BeautyPage'
import SearchPage from './components/SearchPage/SearchPage'
// import { Searchbar } from './core/Navbar/Navbar.style';
const App = () => {
  return (
    <Provider store={store}>
    <Fragment>
      <GlobalStyle/>
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route  path="/login" element={<LoginPage/>}/>
      <Route  path="/signup" element={<SignupPage/>}/>
      <Route  path="/forgotpassword" element={<Forgotpasswordpage/>}/>
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/wishlist" element={<Wishlist/>}/>
      <Route path="/shop" element={<SearchPage/>}/>
      <Route  path="/shop/men" element={<MenPage/>}/>
      <Route  path="/shop/women" element={<WomenPage/>}/>
      <Route  path="/shop/kids" element={<KidsPage/>}/>
      <Route path="/shop/beauty" element={<BeautyPage/>}/>
      </Routes>
      </BrowserRouter>
    </Fragment>    
    </Provider>
  )
}

export default App