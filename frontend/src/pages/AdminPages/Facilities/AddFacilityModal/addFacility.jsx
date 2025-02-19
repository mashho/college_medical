import React from 'react'
import './addFacility.css'
import CloseIcon from '@mui/icons-material/Close';

const AddFacility = (props) => {
    const handleSubmitForm = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='add-facility'>
            <div className='add-facility-card'>
                <div className='add-medicine-header'>
                    <div>Add Facility</div>
                    <div className='close-modal-report' onClick={() => props.openCloseModal()}><CloseIcon /></div>
                </div>

                <div className='add-facility-form'>
                    <form className='register-form' onSubmit={handleSubmitForm}>
                        <div className=''>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Title' />
                            </div>
                            <br/>
                            <div className='register-input-box'>
                                <textarea cols={450} rows={10} type='text' className='input-box-register' placeholder='Add Description' />
                            </div>


                        </div>
                        <button type='submit' className='form-btn reg-btn'>Add</button>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddFacility