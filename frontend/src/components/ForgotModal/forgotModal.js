import React from 'react';
import './forgotModal.css';
const ForgotModal = (props) => {

    const handleCloseModal = ()=>{
        props.closeModal();
    }
    return (
        <div className='forgot-password-modal'>
            <div className='signup-page-card'>
                <div className='card-header-form'>Reset Password</div>
                <div className='form-input-fields'>

                    <input className='form-input' type='eail' placeholder='Enter Email Id' />
                    <input className='form-input' type='text' placeholder='Enter OTP' />
                    <input className='form-input' type='text' placeholder='New Password' />

                </div>
                <div className='form-btn forgot-password-btn'>Register</div>
                <div className='form-btn forgot-password-btn' onClick={handleCloseModal}>Cancel</div>
            </div>
        </div>
    )
}

export default ForgotModal