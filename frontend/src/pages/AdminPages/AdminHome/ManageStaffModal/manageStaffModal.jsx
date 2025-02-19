import React from 'react'
import './manageStaffModal.css';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const ManageStaffModal = (props) => {

    const handleSubmitForm = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='manage-staffs-modal'>
            <div className='manage-staffs-card'>
                <div className='add-medicine-header'>
                    <div>Manage Staffs</div>
                    <div className='close-modal-report' onClick={() => props.openCloseModal()}><CloseIcon /></div>
                </div>
                <div className='add-staffs-box'>
                    <form className='register-form' onSubmit={handleSubmitForm}>
                        <div className='register-form-div'>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Staff Name' />
                            </div>
                            <div className='register-input-box'>
                                <input type='email' className='input-box-register' placeholder='Email Id' />
                            </div>
                            <div className='register-input-box'>
                                <input type='password' className='input-box-register' placeholder='Password' />
                            </div>
                            <div className='register-input-box'>
                                <input type='text' className='input-box-register' placeholder='Designation' />
                            </div>

                        </div>
                        <button type='submit' className='form-btn reg-btn'>Add</button>


                    </form>
                </div>

                <div className='list-staffs'>
                    <div className='list-staff'>
                        <div>Mr. Sanjay Kumar Rao </div>
                        <div className='list-staff-btns'>
                            <div className='edit-icon'><EditIcon/></div>
                            <div className='delete-icon'><DeleteIcon/></div>
                        </div>
                    </div>

                    <div className='list-staff'>
                        <div>Mr. Sanjay Kumar Rao </div>
                        <div className='list-staff-btns'>
                            <div className='edit-icon'><EditIcon/></div>
                            <div className='delete-icon'><DeleteIcon/></div>
                        </div>
                    </div>

                    <div className='list-staff'>
                        <div>Mr. Sanjay Kumar Rao </div>
                        <div className='list-staff-btns'>
                            <div className='edit-icon'><EditIcon/></div>
                            <div className='delete-icon '><DeleteIcon/></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ManageStaffModal;