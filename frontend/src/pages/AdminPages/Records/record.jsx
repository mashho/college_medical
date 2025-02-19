import React, { useEffect, useState } from 'react'
import SearchBox from '../../../components/SearchBox/searchBox'
import './record.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const Record = () => {
    const [studentRoll,setStudentRoll] = useState("");
    const [listOfYear,setListOfYear] = useState([]);
    const [listOfMonth,setListOfMonths] = useState([]);
    const currentYear = new Date().getFullYear();
    // const currentYear = "2035";
    

    const [selectedYear,setSelectedYear] = useState("")
    const [selectedMonth,setSelectedMonth] = useState("")

    useEffect(()=>{
        console.log(selectedMonth,selectedYear)
        if(selectedMonth!=="" && selectedYear!==""){
            return;
        }
    },[selectedYear,selectedMonth])

    useEffect(()=>{
        let arr =[];
        for(let i = 2025;i<=parseInt(currentYear);i++){
            arr.unshift(i.toString())
        }
        setListOfYear(arr);
        setSelectedYear(arr[0]);
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
          
          const currentMonthIndex = new Date().getMonth(); // 0 for Jan, 1 for Feb, ..., 11 for Dec
          
          const pastAndCurrentMonths = months.slice(0, currentMonthIndex + 1);
          setListOfMonths(pastAndCurrentMonths)
          setSelectedMonth(pastAndCurrentMonths[pastAndCurrentMonths.length-1])
          
    },[])
    const handleOnChange = (value)=>{
        setStudentRoll(value)
    }
  return (
    <div className='records'>
        <div className='go-back'><Link to={'/admin/dashboard'} className='go-back' ><ArrowBackIcon /> Back To Dashboard</Link></div>
        <SearchBox value={studentRoll} placeholder="Search By Roll No." onChangeHandle={handleOnChange} />

        <div className='record-date-block'>
            Select year
            <div className='record-date-year'>
                {
                    listOfYear.map((item,index)=>{
                        return (<div key={index} onClick={()=>{setSelectedYear(item)}} className={`record-year ${selectedYear===item?'activeYear':null}`}>{item}</div>);
                    })
                }
                
            </div>

            Select Month

            <div className='record-date-year'>
                {
                    listOfMonth.map((item,index)=>{
                        return (<div key={index} onClick={()=>{setSelectedMonth(item)}}  className={`record-year ${selectedMonth===item?'activeYear':null}`}>{item}</div>);
                    })
                }
                
            </div>

            <div className='manageMedicine-card'>
                <div className='report-form-rows'>
                    <div className='report-form-header'>
                        <div className='col-1-mng'>View</div>
                        <div className='col-2-mng'>Student Name</div>
                        <div className='col-3-mng'>Roll No</div>
                        <div className='col-3-mng record-col-4'>Date</div>


                    </div>
                    <div className='report-form-row-block'>
                        <div className='report-form-row'>
                            <div className='col-1-mng'><RemoveRedEyeIcon/></div>
                            <div className='col-2-mng'>Paracetamol</div>
                            <div className='col-3-mng'>50</div>
                            <div className='col-3-mng record-col-4'>25-02-2025</div>

                        </div>
                        <div className='report-form-row'>
                            <div className='col-1-mng'><RemoveRedEyeIcon/></div>
                            <div className='col-2-mng'>Paracetamol kjjhb jdbdd</div>
                            <div className='col-3-mng'>50</div>
                            <div className='col-3-mng record-col-4'>25-02-2025</div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Record