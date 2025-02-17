import React from 'react'
import './stock.css'
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from '../../components/Table/table';
const Stock = () => {
  const headers=["Sr No.","Name","Quantity","Usage"];
  const medicineData = [
    { srNo: 1, name: "Paracetamol", quantity: 50, purpose: "Fever and Pain Relief" },
    { srNo: 2, name: "Amoxicillin", quantity: 30, purpose: "Antibiotic for Infections" },
    { srNo: 3, name: "Cetirizine", quantity: 100, purpose: "Allergy Relief" },
    { srNo: 4, name: "Ibuprofen", quantity: 75, purpose: "Pain and Inflammation" },
    { srNo: 5, name: "Omeprazole", quantity: 40, purpose: "Acidity and Heartburn" },
    { srNo: 6, name: "Cough Syrup", quantity: 20, purpose: "Cough and Cold" },
    { srNo: 7, name: "Insulin", quantity: 15, purpose: "Diabetes Management" },
    { srNo: 8, name: "Multivitamins", quantity: 200, purpose: "Nutritional Supplement" },
  ];
  return (
    <div className='stock-page'>
      <div className='stock-page-searchBox'>
        <input type='text' className='input-box' placeholder='Search Medicine' />
        <div className='search-btn'><SearchIcon /></div>
      </div>
      <div className='stock-page-card'> 
        <CustomTable headers={headers} data={medicineData}  />
      </div>
    </div>
  )
}

export default Stock