import React, { useState } from 'react';
import './adminFacility.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddFacility from './AddFacilityModal/addFacility';

const AdminFacilitiy = () => {
    const [modal,setModal] = useState(false);
    const  openCloseModal = () =>{
        setModal(prev=>!prev)
    }
    return (
        <div className='admin-facility'>
            <div className='go-back'><Link to={'/admin/dashboard'} className='go-back' ><ArrowBackIcon /> Back To Dashboard</Link></div>

            <div className='admin-facility-header'>
                <div>Facilities</div>
                <div className='add-facility-btn' onClick={openCloseModal}>Add </div>
            </div>
            <div className='admin-facility-rows'>

                <div className='admin-facility-row'>
                    <div className='admin-facility-left'>
                        <div className='admin-facility-title'>OPD Service</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel cum error repellendus rem at quisquam unde placeat praesentium, nam expedita. Ipsa aliquam at veritatis officiis error saepe, quibusdam dignissimos nulla.</div>
                    </div>
                    <div className='admin-facility-btns'>
                        <div className='edit-icon'><EditIcon /></div>
                        <div className='delete-icon'><DeleteIcon /></div>

                    </div>
                </div>

                
            </div>
            {modal && <AddFacility openCloseModal={openCloseModal}/>}
        </div>
    )
}

export default AdminFacilitiy;