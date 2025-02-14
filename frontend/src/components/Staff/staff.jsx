import React from 'react'
import './staff.css';
import CustomTable from '../Table/table';

const Staff = () => {
    const staffHeader = ["Name","Designation","Email Id","Contact No."]
    const staffData = [
        {
          name: "John Doe",
          designation: "HOD Cardiology",
          email: "john.cardiology@example.com",
          contactNo: "+918765432101"
        },
        {
          name: "Jane Smith",
          designation: "HOD Neurology",
          email: "jane.neuro@example.com",
          contactNo: "+919876543210"
        },
        {
          name: "Raj Malhotra",
          designation: "HOD Orthopedics",
          email: "raj.ortho@example.com",
          contactNo: "+917894561230"
        },
        {
          name: "Nina Patel",
          designation: "HOD Pediatrics",
          email: "nina.pediatrics@example.com",
          contactNo: "+917654321098"
        }
      ];
      
    return (
        <div className='staff'>
            <CustomTable headers={staffHeader} data={staffData} />
        </div>
    )
}

export default Staff