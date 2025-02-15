import React, { useState } from 'react'
import './home.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import MmsIcon from '@mui/icons-material/Mms';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GlobalLoader from '../../components/GlobalLoader/globalLoader';
import About from '../../components/About/about';
import Staff from '../../components/Staff/staff';
import Facility from '../../components/Facilities/facility';
import NearByHospitals from '../../components/NearByHospitals/nearByHospitals';
import Gallary from '../../components/Gallary/gallary';
const Home = () => {
    let [page, setPage] = useState("About");
    let [rightSideHeader,setRightSideHeader] = useState("About Us");
    const [handleLoader,setHandleLoader] = useState(false)

    const handleChangeTab = (pagename)=>{
        setPage(pagename);
        switch(pagename){
            case "About":
                setRightSideHeader("About Us");
                break;
            case "Staff":
                setRightSideHeader("Our Staffs");
                break;
            case "Facilities":
                setRightSideHeader("Facilities");
                break;
            case "NearByHospitals":
                setRightSideHeader("Near By Hosptals");
                break;
            case "Gallary":
                setRightSideHeader("Gallary");
                break;
        }
    }
    const getComponent = ()=>{
        switch(page){
            case "About":
                return <About />;
            case "Staff":
                return <Staff />;
            case "Facilities":
                return <Facility />;
            case "NearByHospitals":
                return <NearByHospitals />;
            default:
                return <Gallary />
        }
    }
    return (
        <div className='home'>
            <div className='home-block'>
                <div className='home-left-page'>
                    <div className={`home-left-option ${page==="About"?"active-opt":null}`} onClick={()=>handleChangeTab("About")}>
                       <HomeIcon/> About Us
                    </div>
                    <div className={`home-left-option ${page==="Staff"?"active-opt":null}`} onClick={()=>handleChangeTab("Staff")}>
                       <PeopleAltIcon/> Staff
                    </div>
                    <div className={`home-left-option ${page==="Facilities"?"active-opt":null}`} onClick={()=>handleChangeTab("Facilities")}>
                       <GroupsIcon/> Facilities
                    </div>
                    <div className={`home-left-option ${page==="NearByHospitals"?"active-opt":null}`} onClick={()=>handleChangeTab("NearByHospitals")}>
                       <LocalHospitalIcon/> Nearby Hospitals
                    </div>
                    <div className={`home-left-option ${page==="Gallary"?"active-opt":null}`} onClick={()=>handleChangeTab("Gallary")}>
                       <MmsIcon /> Gallary
                    </div>
                </div>
                <div className='home-right-page'>
                    <div className='home-right-header'>
                        {rightSideHeader}
                    </div>
                    <div className='home-right-section'>
                        {getComponent()}
                    </div>
                </div>
            </div>
            {handleLoader && <GlobalLoader/>}
        </div>
    )
}

export default Home