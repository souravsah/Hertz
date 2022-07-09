import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { registerUser } from '../../redux/auth/authactions'
import { Formbox, Formcss, Login, Loginheader } from '../LoginForm/LoginForm.style'
import { Navigate } from 'react-router'
const SignupForm = () => {
  
  let dispatch =useDispatch();
  let navigate = useNavigate()
  let formdata = useSelector((state)=>state)
  let [data,setdata]=useState({
    name:'',
    email:'',
    password:'',
    passwordConfirm:''
  }
)
let [error,seterror]=useState({
  namerror:'',
  emailerror:'',
  passworderror:'',
  passwordConfirmerror:'',
  passwordSameerror:''
})

  const signuperror = useRef({
    namerror:'',
    emailerror:'',
    passworderror:'',
    passwordConfirmerror:'',
    passwordSameerror:''
  })
  const handleChange = (e) =>{
    setdata({...data,[e.target.name]:e.target.value})
  
  }
  
  const handleClick = () =>{
    navigate('/login')
  }
  const validation = (data) =>{
    let x=true;
    if(data.name===''){
      x=false;
      signuperror.current.namerror =`Name field cannot be empty `
    }
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
    if(data.passwordConfirm===''){
      x=false;
      signuperror.current.passwordConfirmerror =`Confirm Password cannot be empty `
    }
    if(data.password.length<=8){
      x=false;
      signuperror.current.passwordConfirmerror =`Confirm Password must be of minimum 8 characters `
    }
    if(data.password!==data.passwordConfirm){
      x=false;
      signuperror.current.passwordSameerror =`Password do not match `
    }
return x;
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    let p=validation(data)
    seterror({...signuperror.current})
    if(p){
      setdata({
        name:'',
        email:'',
        password:'',
        passwordConfirm:''
      })
        dispatch(registerUser(data))
        alert('Succesfully Logged in...') 
    }
    
    console.log(data);
    console.log(signuperror.current)
  }
console.log(formdata);

if(localStorage.getItem('jwt')){
  return <Navigate to="/" />
  
}


  return (
    <Login>
      <Formcss action="" onSubmit={handleSubmit}>
        <Loginheader><h4>SIGN UP</h4></Loginheader>
        <Formbox>
          <input type="text" placeholder='Name' onChange={handleChange} name='name' value={data.name}/><br/>
        <small>{error.namerror}</small>
        </Formbox>
        <Formbox>
            <input type="email" name="email" id="" placeholder='Email' onChange={handleChange} value={data.email} /><br/>
            <small>{error.emailerror}</small>
        </Formbox>
        <Formbox>
            <input type="password" name="password" id="" placeholder='Password' onChange={handleChange} value={data.password} /><br/>
            <small>{error.passworderror}</small>
        </Formbox>
        <Formbox>
            <input type="password" name="passwordConfirm" id="" placeholder='Confirm Password' onChange={handleChange} value={data.passwordConfirm}/><br/>
            <small>{error.passwordConfirmerror}</small><br/>
            <small>{error.passwordSameerror}</small>
        </Formbox>
          <button type="submit">Submit</button>
          {/* <p>Forgot <span>Password</span>?</p> */}
          <p>Already have an account? <span onClick={handleClick}>Login</span></p>
      </Formcss>
      
    </Login>
  )
}

export default SignupForm