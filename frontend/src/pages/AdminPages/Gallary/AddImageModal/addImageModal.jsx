import React from 'react'
import './addAdminModal.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddImageModal = (props) => {
    return (
        <div className='delete-imageModal'>
            <div className='delete-modal-card'>
                <div>Add Image</div>
                <div className='delete-modal-btns'>
                    <div className='cancel-modal-btn' onClick={() => { props.handleAddImageModal() }} >Cancel</div>
                    <div className='cancel-modal-btn' ><CloudUploadIcon /></div>
                </div>

                <div className='gallary-home-image-block' style={{marginTop:"20px"}}>
                    <img src='https://nitdelhi.ac.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-03-07-at-12.12.07-PM.jpeg' className='gallary-home-image' />
                </div>
            </div>
        </div>
    )
}

export default AddImageModal