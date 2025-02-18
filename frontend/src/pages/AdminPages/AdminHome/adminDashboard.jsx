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
          <div className='admin-dashboard-card'>
            Records
          </div>
        </div>
        {manageModal && <ManageStaffModal openCloseModal={openCloseModal} />}
    </div>
  )
}

export default AdminDashboard;