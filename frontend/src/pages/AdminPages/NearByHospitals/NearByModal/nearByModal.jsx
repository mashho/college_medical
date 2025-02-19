import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const NearByModal = (props) => {
    const handleSubmitForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className='add-facility'>
            <div className='add-facility-card'>
                <div className='add-medicine-header'>
                    <div>Add Hospitals</div>
                    <div className='close-modal-report' onClick={() => props.openCloseModal()}><CloseIcon /></div>
                </div>

                <div className='add-facility-form'>
                    <form className='register-form' onSubmit={handleSubmitForm}>
                        <div className='register-form-div'>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Name' />
                            </div>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Address' />
                            </div>
                            
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Contacts' />
                            </div>

                        </div>
                        <button type='submit' className='form-btn reg-btn'>Add</button>


                    </form>
                </div>
            </div>
        </div>
    )

}

export default NearByModal