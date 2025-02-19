import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import './studentDetailModal.css'
const StudentDetailModal = (props) => {
    
    return (
        <div className='add-facility'>
            <div className='add-facility-card'>
                <div className='add-medicine-header'>
                    <div>Details</div>
                    <div className='close-modal-report' onClick={() => props.openCloseModal()}><CloseIcon /></div>
                </div>

                
            </div>
        </div>
    )
}

export default StudentDetailModal