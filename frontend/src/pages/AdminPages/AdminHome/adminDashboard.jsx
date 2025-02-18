import React from 'react';
import './adminDashboard.css';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
  return (
    <div className='adminDashboard'>
        <div className='welcome-header'>
          <div className='welcome-admin'>Welcome To Admin Panel</div>
          <div className='manage-staff-btn'>Manage Staffs</div>
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
    </div>
  )
}

export default AdminDashboard;