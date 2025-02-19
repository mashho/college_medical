import React, { useState } from 'react'
import './studentDashboard.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StudentDetailModal from './StudentDetailsModal/studentDetailModal';

const StudentDashboard = () => {
    const [detailsModal, setDetailsModal] = useState(false);
    const setOnOffModal = ()=>{
        setDetailsModal(prev=>!prev)
    }
    return (
        <div className='student-dashboard'>
            <div className='student-info'>
                <div className='welcone-user'>Welcome, <span>User Name</span></div>
                <div className='welcone-user'>18CSE777GH</div>
                <div className='welcone-user'>raghu.kumar@uk.gmail.com</div>

            </div>

            <div className='report-form-rows student-dash'>
                <div className='report-form-header'>
                    <div className='col-1-mng'>View</div>
                    <div className='col-3-mng record-col-4'>Date</div>
                </div>
                <div className='report-form-row-block'>
                    <div className='report-form-row'>
                        <div className=' eye' onClick={setOnOffModal}><RemoveRedEyeIcon /></div>
                        <div className='col-3-mng record-col-4'>25-02-2025</div>
                    </div>
                    <div className='report-form-row'>
                        <div className=' eye' onClick={setOnOffModal}><RemoveRedEyeIcon /></div>
                        <div className='col-3-mng record-col-4'>25-02-2025</div>
                    </div>
                </div>
            </div>
        {detailsModal && <StudentDetailModal openCloseModal={setOnOffModal}/>}
        </div>
    )
}

export default StudentDashboard