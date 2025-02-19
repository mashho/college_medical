import React, { useState } from 'react'
import './login.css'
import ForgotModal from '../../components/ForgotModal/forgotModal';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [forgotPassword,setForgotPassword] = useState(false);
  const navigate= useNavigate()
  const closeForgotPassword =()=>{
    setForgotPassword(prev=>!prev)
  }

  const handleLogin=async(role="admin")=>{
    if(role==="admin"){
      navigate('/admin/dashboard');
    }else{
      alert("This page is not yet designed")
    }
  }

  const handleRegister =async()=>{
    navigate("/student/123")
  }
  return (
    <div className='login-page'>


      <div className='login-page-card'>
        <div className='card-header-form'>Login</div>
        <div className='form-input-fields'>
          <input className='form-input' type='email' placeholder='Enter Email Id' />
          <input className='form-input' type='password' placeholder='Your Password' />
          <div className='form-btn' onClick={()=>handleLogin("admin")}>Login</div>
        </div>
        <div className='forgot-password-link' onClick={closeForgotPassword}>Forgot Password ?</div>
      </div>



      <div className='signup-page-card'>
        <div className='card-header-form'>Register</div>
        <div className='form-input-fields'>

          <input className='form-input' type='text' placeholder='Your Name' />
          <input className='form-input' type='email' placeholder='Enter Email Id' />
          <input className='form-input' type='password' placeholder='Your Password' />
          <input className='form-input' type='text' placeholder='Your Roll No' />


          <div className='form-btn' onClick={handleRegister}>Register</div>
        </div>
      </div>
      {
        forgotPassword && <ForgotModal closeModal={closeForgotPassword} />
      }
    </div>
  )
}

export default Login