import React, { useState } from 'react'
import './manageMedicine.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBox from '../../../components/SearchBox/searchBox';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import AddMedicine from './AddMedicine/addMedicine';
const ManageMedicine = () => {
    const [medicineSearch,setMedicineSearch] = useState("")
    const [addModal,setAddModal] = useState(false)
    const handleInputChange = (value)=>{
        setMedicineSearch(value)
    }
    const openCloseModal = ()=>{
        setAddModal(prev=>!prev)
    }
    return (
    <div className='manageMedicine'>
        <div className='go-back'><Link to={'/admin/dashboard'} className='go-back' ><ArrowBackIcon /> Back To Dashboard</Link></div>
        
        <div className='top-manage-medicine'>
            <SearchBox onChangeHandle={handleInputChange} value={medicineSearch} placeholder="Search medicine" />
            <div className='add-manage-medicine' onClick={openCloseModal}>Add</div>
        </div>
        <div className='manageMedicine-card'>
        <div className='report-form-rows'>
          <div className='report-form-header'>
            <div className='col-1-mng'>Sr. No.</div>
            <div className='col-2-mng'>Medicine Name</div>
            <div className='col-3-mng'>Quantity</div>
            <div className='col-4-mng'>Edit</div>
            <div className='col-5-mng'>Delete</div>
            
          </div>
          <div className='report-form-row-block'>
            <div className='report-form-row'>
              <div className='col-1-mng'>1</div>
              <div className='col-2-mng'>Paracetamol</div>
              <div className='col-3-mng'>50</div>
              <div className='col-4-mng edit-icon'><EditIcon/></div>
              <div className='col-5-mng delete-icon'><DeleteIcon/></div>
            </div>
            <div className='report-form-row'>
              <div className='col-1-mng'>2</div>
              <div className='col-2-mng'>Paracetamol kjjhb jdbdd</div>
              <div className='col-3-mng'>50</div>
              <div className='col-4-mng edit-icon'><EditIcon/></div>
              <div className='col-5-mng delete-icon'><DeleteIcon/></div>
            </div>      
            
            
          </div>

        </div>
        </div>
        {addModal && <AddMedicine openCloseModal={openCloseModal} />}
    </div>
  )
}

export default ManageMedicine