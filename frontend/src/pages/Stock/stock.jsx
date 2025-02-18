import React, { useState } from 'react'
import './stock.css'
import CustomTable from '../../components/Table/table';
import SearchBox from '../../components/SearchBox/searchBox';
const Stock = () => {
  const [medicineName,setMedicineName] = useState("");
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

  const handleOnChangeInputField = (value)=>{
    setMedicineName(value);
  }
  return (
    <div className='stock-page'>
      <SearchBox placeholder={"Search Medicine"} value={medicineName} onChangeHandle={handleOnChangeInputField}  />
      <div className='stock-page-card'> 
        <CustomTable headers={headers} data={medicineData}  />
      </div>
    </div>
  )
}

export default Stock