import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import './gallaryAdmin.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddImageModal from './AddImageModal/addImageModal';
const GallaryAdmin = () => {

    const [deleteModal, setDeleteModal] = useState(false)
    const [addimageModal, setaddimageModal] = useState(false)

    const handleDeleteModal = (id) => {
        setDeleteModal(prev => !prev)
    }
    const handleAddImageModal = ()=>{
        setaddimageModal(prev=>!prev)
    }
    return (
        <div className='gallary-admin'>
            <div className='go-back'><Link to={'/admin/dashboard'} className='go-back' ><ArrowBackIcon /> Back To Dashboard</Link></div>
            <div className='add-pic-gallary-btn' onClick={handleAddImageModal}>Add Pic</div>
            <div className='gallary-home'>
                <div className='gallary-home-image-block' onClick={() => { handleDeleteModal() }} >
                    <img src='https://nitdelhi.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-10-24-at-10.29.30-AM.jpeg' className='gallary-home-image' />
                </div>

                <div className='gallary-home-image-block' onClick={() => { handleDeleteModal() }}>
                    <img src='https://nitdelhi.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-10-24-at-10.29.30-AM.jpeg' className='gallary-home-image' />
                </div>

                <div className='gallary-home-image-block' onClick={() => { handleDeleteModal() }}>
                    <img src='https://nitdelhi.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-10-24-at-10.29.30-AM.jpeg' className='gallary-home-image' />
                </div>

                <div className='gallary-home-image-block' onClick={() => { handleDeleteModal() }}>
                    <img src='https://nitdelhi.ac.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-10-24-at-10.29.30-AM.jpeg' className='gallary-home-image' />
                </div>

                <div className='gallary-home-image-block' onClick={() => { handleDeleteModal() }}>
                    <img src='https://nitdelhi.ac.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-03-07-at-12.12.07-PM.jpeg' className='gallary-home-image' />
                </div>

            </div>
            {
                deleteModal && <div className='delete-imageModal'>
                    <div className='delete-modal-card'>
                        <div>Are you sure? Want to delete this image ?</div>
                        <div className='delete-modal-btns'>
                            <div className='cancel-modal-btn' onClick={() => { handleDeleteModal() }} >Cancel</div>
                            <div className='cancel-modal-btn' ><DeleteIcon /></div>
                        </div>
                    </div>
                </div>
            }

           {addimageModal && <AddImageModal handleAddImageModal={handleAddImageModal} />}
        </div>
    )
}

export default GallaryAdmin;