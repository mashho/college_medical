import React from 'react'
import './addMedicine.css'
import CloseIcon from '@mui/icons-material/Close';

const AddMedicine = (props) => {
    const handleSubmitForm = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='add-medicine'>
            <div className='add-medicine-card'>
                <div className='add-medicine-header'>
                    <div>Add Medicine</div>
                    <div className='close-modal-report' onClick={()=>props.openCloseModal()}><CloseIcon /></div>
                </div>
                <div className='add-medicine-form'>
                    <form className='register-form' onSubmit={handleSubmitForm}>
                        <div className='register-form-div'>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Medicine Name' />
                            </div>
                            <div className='register-input-box'>
                                <input type='number' className='input-box-register' placeholder='Quantity' />
                            </div>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Usage' />
                            </div>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Price' />
                            </div>
                            
                        </div>
                        <button type='submit' className='form-btn reg-btn'>Add</button>

                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMedicine