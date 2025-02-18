import React, { useState } from 'react'
import './reportModal.css'
import CloseIcon from '@mui/icons-material/Close';
import SearchBox from '../SearchBox/searchBox';
import DeleteIcon from '@mui/icons-material/Delete';
const ReportModal = (props) => {
  const [searchMedicineName,setSearchmedicineName] = useState("")
  const [dropdown,setDropDown] = useState(false);
  const hanldeOnChange=(value)=>{
    setSearchmedicineName(value)
    if(!searchMedicineName.length){
      setDropDown(false)
      return ;
    }
  }
  return (
    <div className='report-modal'>
      <div className='report-modal-card'>
        <div className='report-modal-header'>
          <div>Report</div>
          <div className='close-modal-report' onClick={()=>props.handleCloseModal()}><CloseIcon /></div>
        </div>
        <div className='medicine-suggestion-block'>
          <SearchBox value={searchMedicineName} onChangeHandle={hanldeOnChange} placeholder={"Medicine Name"} />
          {
            dropdown && <div className='report-dropdown'>
            <div className='report-medicine-drpdown'>Paracetamol</div>
            <div className='report-medicine-drpdown'>Paracetamol</div>
            <div className='report-medicine-drpdown'>Paracetamol</div>
            <div className='report-medicine-drpdown'>Paracetamol</div>
            <div className='report-medicine-drpdown'>Paracetamol</div>

          </div>
          }
        </div>
        
        <div className='report-form-rows'>
          <div className='report-form-header'>
            <div className='col-1-rm'>Medicine Name</div>
            <div className='col-2-rm'>Quantity Left</div>
            <div className='col-3-rm'>Required Quantity</div>
            <div className='col-4-rm'>Delete</div>
          </div>
          <div className='report-form-row-block'>
            <div className='report-form-row'>
              <div className='col-1-rm'>Paracetamol</div>
              <div className='col-2-rm'>50</div>
              <div className='col-3-rm'><input type='number' className='input-table' /></div>
              <div className='delete-icon col-4-rm'><DeleteIcon/></div>
            </div>
            
            
          </div>

          <div className='modal-submit'>Submit</div>
        </div>
      </div>
    </div>
  )
}

export default ReportModal;