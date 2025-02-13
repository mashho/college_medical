import React from 'react'
import './footer.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='foooter-left'>
            <img src='https://tse3.mm.bing.net/th/id/OIP.HQTtZzKIZxQrMW3gtiRHBwAAAA?rs=1&pid=ImgDetMain' className='footer-logo' />
            <div className='footer-text-white'>National Institute of Technology</div>
            <div className='footer-text-white'>Uttrakhand</div>
            <div className='footer-text-smaller'>Srinagar, Pauri (Garhwal)-246174</div>
            <div className='footer-text-smaller'><LocalPhoneIcon /> 1346-257400</div>
            <p>Copyright © 2024 National Institute of Technology, Uttarakhand.</p>
        </div>
    </div>
  )
}

export default Footer