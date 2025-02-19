import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NearByModal from './NearByModal/nearByModal';
const NearByHospitalsManage = () => {
    const [modal,setModal] = useState(false);
    const  openCloseModal = () =>{
        setModal(prev=>!prev)
    }
    return (
        <div className='admin-facility'>
            <div className='go-back'><Link to={'/admin/dashboard'} className='go-back' ><ArrowBackIcon /> Back To Dashboard</Link></div>

            <div className='admin-facility-header'>
                <div>Near By Hospitals</div>
                <div className='add-facility-btn' onClick={openCloseModal}>Add </div>
            </div>
            <div className='admin-facility-rows'>

                <div className='admin-facility-row'>
                    <div className='admin-facility-left'>
                        <div className='admin-facility-title'>Hospital Name</div>
                        <div>Near XYZ, College, XYZ, India</div>
                        <div>+91 7298787898</div>

                    </div>
                    <div className='admin-facility-btns'>
                        <div className='edit-icon'><EditIcon /></div>
                        <div className='delete-icon'><DeleteIcon /></div>

                    </div>
                </div>

                
            </div>
            {modal && <NearByModal openCloseModal={openCloseModal}/>}
        </div>
    )

}

export default NearByHospitalsManage;