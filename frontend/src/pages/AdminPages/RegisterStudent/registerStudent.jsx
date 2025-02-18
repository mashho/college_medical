import React, { useState } from 'react'
import './registerStudent.css'
import SearchBox from '../../../components/SearchBox/searchBox'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReportModal from '../../../components/Report/reportModal';
const RegisterStudent = () => {
    const [searchStudent, setSearchStudent] = useState("");
    const [reportModal, setReportModal] = useState(false)

    const handleCloseModal = () => {
        setReportModal(prev => !prev)
    }
    const onChangeHandle = (value) => {
        setSearchStudent(value)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
    }
    return (
        <div className='register-student'>

            <div className='go-back'><Link to={'/admin/dashboard'} className='go-back' ><ArrowBackIcon /> Back To Dashboard</Link></div>
            <SearchBox placeholder={"Search By ID"} value={searchStudent} onChangeHandle={onChangeHandle} />

            <div className='register-form-block'>
                <div className='register-form-header'>Register Student</div>
                <form className='register-form' onSubmit={handleSubmitForm}>
                    <div className='register-form-div'>
                        <div className='register-input-box'>
                            <input type='text' className='input-box-register' placeholder='Student Name' />
                        </div>
                        <div className='register-input-box'>
                            <input type='text' className='input-box-register' placeholder='Roll No.' />
                        </div>
                        <div className='register-input-box'>
                            <input type='text' className='input-box-register' placeholder='Mobile No.' />
                        </div>
                        <div className='register-input-box'>
                            <input type='text' className='input-box-register' placeholder='Fathers Name' />
                        </div>
                        <div className='register-input-box'>
                            <input type='text' className='input-box-register' placeholder='Fathers Mobile No.' />
                        </div>
                        <div className='register-input-box'>
                            <input type='text' className='input-box-register' placeholder='Address' />
                        </div>
                    </div>
                    <button type='submit' className='form-btn reg-btn'>Register</button>

                    <div className='block-divs'>
                        <button type='submit' className='form-btn reg-btn'>Update</button>
                        <button type='submit' className='form-btn reg-btn' onClick={handleCloseModal}>Report</button>
                    </div>
                </form>
            </div>
            {reportModal && <ReportModal handleCloseModal={handleCloseModal} />}
        </div>
    )
}

export default RegisterStudent