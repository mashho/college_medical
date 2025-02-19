import React, { useState } from 'react';
import './adminDashboard.css';
import { Link } from 'react-router-dom';
import ManageStaffModal from './ManageStaffModal/manageStaffModal';
const AdminDashboard = () => {
  const [manageModal,setManageModal] = useState(false);
  const openCloseModal = ()=>{
    setManageModal(prev=>!prev)
  }
  return (
    <div className='adminDashboard'>
        <div className='welcome-header'>
          <div className='welcome-admin'>Welcome To Admin Panel</div>
          <div className='manage-staff-btn' onClick={openCloseModal}>Manage Staffs</div>
        </div>
        <div className='admin-dashboard-cards'>
          <Link to={'/admin/register-student'} className='admin-dashboard-card'>
            Register Student
          </Link>
          <Link to={'/admin/manage-medicine'} className='admin-dashboard-card'>
            Manage Medicines
          </Link>
          <Link to={"/admin/records"} className='admin-dashboard-card'>
            Records
          </Link>
          <Link to={"/admin/faciltity"} className='admin-dashboard-card'>
            Facilities
          </Link>
          <Link to={"/admin/hospitals"} className='admin-dashboard-card'>
            Near By Hospitals
          </Link>
          <Link to={"/admin/gallary"} className='admin-dashboard-card'>
            Gallary
          </Link>
        </div>
        {manageModal && <ManageStaffModal openCloseModal={openCloseModal} />}
    </div>
  )
}

export default AdminDashboard;