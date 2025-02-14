import React from 'react';
import './nearByHospitals.css';
import CustomTable from '../Table/table';


const NearByHospitals = () => {
    const hospitals = [
        {
          serialNo: 1,
          name: "Maharaja Agrasain Multispeciality Hospital",
          address: "Plot No. 6,7,9, Bawana Road, Narela, Delhi – 110040",
          contact: ["09891654929", "09667097114", "09811117913"]
        },
        {
          serialNo: 2,
          name: "Vedant Multispeciality Hospital",
          address: "481, Nehru Enclave, Alipur, Delhi, 110036",
          contact: ["07827344421"]
        },
        {
          serialNo: 3,
          name: "Satyawadi Raja Harish Chandra Hospital",
          address: "Plot Number- 30, A7, Narela, Delhi – 110040 (Near Sports Complex, Rai Industrial Area)",
          contact: ["01127787304", "01127787305"]
        },
        {
          serialNo: 4,
          name: "Rathi Hospital",
          address: "48/1 Krishna Colony, Sindhu Border Road, Near Gurudwara, Narela, Delhi, 110040",
          contact: ["09818872499"]
        },
        {
          serialNo: 5,
          name: "Max Super Speciality Hospital, Shalimar Bagh",
          address: "FC 50, Max Wali Rd, C and D Block, Shalimar Place Site, Shalimar Bagh, New Delhi, Delhi 110088",
          contact: ["01166422222"]
        },
        {
          serialNo: 6,
          name: "Kapil Multispeciality Hospital",
          address: "A-1 Shastri Park Mor, Nathupura, Burari, New Delhi, Delhi 110084",
          contact: ["08851622364"]
        }
      ];
    
    const hosptalheaders = ["Sn No.","Name","Address","Contact"]
      
  return (
    <div className='nearByHospital'>
        <CustomTable headers={hosptalheaders} data={hospitals} />

    </div>
  )
}

export default NearByHospitals