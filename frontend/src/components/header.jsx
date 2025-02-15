import React, { useEffect, useState } from 'react'
import './header.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink,useLocation } from 'react-router-dom';
const Header = () => {
    const [eventpopup, setEventpopup] = useState(false)
    const [helpline, setHelpline] = useState(false)
    const location = useLocation()
    const handleOpenpopup = (popup) => {
        if (popup === "events") {
            setEventpopup(true)
        } else {
            setHelpline(true)
        }

    }
    const handleClosePopup = (popup) => {
        if (popup === "events") {
            setEventpopup(false)
        } else {
            setHelpline(false)
        }
    }

    return (
        <div className='header'>
            {/* top header */}
            <div className='header-college-details'>
                <div className='header-college-details-left'>
                    <img className='header-college-details-left-logo' src='https://tse3.mm.bing.net/th/id/OIP.HQTtZzKIZxQrMW3gtiRHBwAAAA?rs=1&pid=ImgDetMain' alt='colegeLogo' />
                    <div>
                        <div className='header-college-details-name'>राष्ट्रीय प्रौद्योगिकी संस्थान,</div>
                        <div className='header-college-details-place'>उत्तराखंड </div>
                        <div className='header-college-details-name'>National Institute of Technology, </div>
                        <div className='header-college-details-place'>Uttrakhand </div>
                    </div>
                </div>
                <div className='header-college-details-right'>
                    <div className='header-college-social-media'>
                        <a href=''><img src='https://cdn-icons-png.flaticon.com/128/3670/3670147.png' className='header-social-media-image' /></a>
                        <a href=''><img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' className='header-social-media-image' /></a>
                        <a href=''><img src='https://cdn-icons-png.flaticon.com/128/5968/5968830.png' className='header-social-media-image' /></a>
                        <a href=''><img src='https://th.bing.com/th/id/OIP.0wjhvLpjGf_-r-1lqG3QAQHaHw?rs=1&pid=ImgDetMain' className='header-social-media-image' /></a>
                    </div>
                    <input type='text' className='header-input-tags' />

                </div>
            </div>


            {/* navbar */}
            <nav>
                <div className='navbar'>
                    <NavLink to={"/"} className={`navbar-links ${location.pathname==="/"?'active-navLink':null}`}>
                        Home
                    </NavLink>

                    <NavLink to={'/login'} className={`navbar-links ${location.pathname==="/login"?'active-navLink':null}`}>
                        Login
                    </NavLink>
                    <NavLink to={'/stock'} className={`navbar-links ${location.pathname==="/stock"?'active-navLink':null}`}>
                        Stock View
                    </NavLink>
                    <div className='navbar-links event-link' onMouseLeave={() => handleClosePopup("events")} onMouseEnter={() => handleOpenpopup("events")}>
                        <div className='navbar-link-opt'>New Events <ArrowDropDownIcon /></div>
                        {
                            eventpopup && <div className='navbar-dropdown-popup event-pop'>
                                <div className='popup-notification'>. Arijit Singh is coming for college fest </div>
                                <div className='popup-notification'>. Music Event is Going to be on 23rd Feb,2025 </div>
                            </div>
                        }
                    </div>
                    <div className='navbar-links event-link' onMouseLeave={() => handleClosePopup("helpline")} onMouseEnter={() => handleOpenpopup("helpline")}>
                        <div className='navbar-link-opt'>Helpline <ArrowDropDownIcon /></div>
                        {
                            helpline && <div className='navbar-dropdown-popup helpline-pop event-pop'>
                                <div className='popup-notification'>Disaster Helpline: 1077 </div>
                                <div className='popup-notification'>Women Helpline: 1091 </div>
                                <div className='popup-notification'>Police: 100 </div>
                                <div className='popup-notification'>Fire & Rescue: 101 </div>
                                <div className='popup-notification'>Ambulance: 102/1099 </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>

            {
                location.pathname === '/' ? <div className='header-banner'>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0JtwxcjNmUy0HNfNwUA4bbdNgAExlepqgG2yDgpKR2emOMi79JnaSHAFMHp5FAWbhrA&usqp=CAU"} className='header-banner-image' />
                </div>:null
            }


        </div>
    )
}

export default Header