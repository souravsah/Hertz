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
      <Route />
      </Routes>
      </BrowserRouter>
    </Fragment>    
    </Provider>
    
  )
}

export default App