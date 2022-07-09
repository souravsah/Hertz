import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import { forgotPassword } from '../../redux/auth/authactions'
import { Forgot, Parent } from './Forgotpassword.style'


const Forgotpassword = () => {
let dispatch = useDispatch()
  let [data,setdata]=useState({
    email:''
  }
)
let [error,seterror]=useState({

  emailerror:'',
})

  const forgotpassworderror = useRef({

    emailerror:'',


  })
  
const handleChange = (e) =>{
    setdata({...data,[e.target.name]:e.target.value})
  
  }
  
  
 
  const validation = (data) =>{
    let x=true;
    if(data.email===''){
      x=false;
      forgotpassworderror.current.emailerror =`Email cannot be empty `
    }   
  return x;
}

  const handleSubmit = (e) =>{
    e.preventDefault();
    let p=validation(data)
    seterror({...forgotpassworderror.current})
    if(p){
      setdata({    
        email:'',
      })
      dispatch(forgotPassword(data))
      
    }
    
    console.log(data);
    console.log(forgotpassworderror.current)
  }
  if(localStorage.getItem('jwt')){
    return <Navigate to="/" />
    
  }

  return (
    <Parent>
<Forgot>
    <h1>Reset Password</h1>
    <p>Enter your email to reset your password</p>
    <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder='Enter your Email' onChange={handleChange} />
        <small>{error.emailerror}</small>
        <button>RESET PASSWORD</button>
    </form>
</Forgot>
    </Parent>

  )
}

export default Forgotpassword