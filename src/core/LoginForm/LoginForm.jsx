import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Navigate } from 'react-router'
import { loginUser } from '../../redux/auth/authactions'
import { Formbox, Formcss, Login, Loginheader } from './LoginForm.style'
const LoginForm = () => {
  let dispatch =useDispatch();
  let navigate = useNavigate()
  let formdata = useSelector((state)=>state)
  let [data,setdata]=useState({
    email:'',
    password:'',
  }
)
let [error,seterror]=useState({

  emailerror:'',
  passworderror:'',


})

  const signuperror = useRef({

    emailerror:'',
    passworderror:'',

  })
  const handleChange = (e) =>{
    setdata({...data,[e.target.name]:e.target.value})
  
  }
  
  const handleClick = () =>{
    navigate('/signup')
  }
  const handlePassword = () =>{
    navigate('/forgotpassword')
  }
  const validation = (data) =>{
    let x=true;
    if(data.email===''){
      x=false;
      signuperror.current.emailerror =`Email cannot be empty `
    }
    if(data.password===''){
      x=false;
      signuperror.current.passworderror =`Password cannot be empty `
    }
    if(data.password.length<=8){
      x=false;
      signuperror.current.passworderror =`Password must beof minimum 8 characters `
    }
    
return x;
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    let p=validation(data)
    seterror({...signuperror.current})
    if(p){
      setdata({
    
        email:'',
        password:'',
    
      })
        dispatch(loginUser(data))
      alert('Succesfully Logged in...')
    }
}
if(localStorage.getItem('jwt')){
  return <Navigate to="/" />
  
}


  return (
    <Login>
      <Formcss action="" onSubmit={handleSubmit}>
        <Loginheader><h4>LOGIN</h4></Loginheader>
        <Formbox>
          <input type="email" name="email" id="" placeholder='Email' onChange={handleChange} value={data.email}/>
          <small>{error.emailerror}</small>
        </Formbox>
        <Formbox>
        <input type="password" name="password" id="" placeholder='Password' onChange={handleChange} value={data.password} />
        <small>{error.passworderror}</small>
        </Formbox>
          <button type="submit">Login</button>
          <p>Forgot <span onClick={handlePassword}>Password</span>?</p>
          <p>Don't have an account? <span onClick={handleClick}>Sign up</span></p>
      </Formcss>
      
    </Login>

  )
}

export default LoginForm