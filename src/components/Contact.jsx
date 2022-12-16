import React from 'react';
import { BsFillTelephoneFill, BsFillPinMapFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id='iletisim' className='light-container'>
        <h1>Iletisim</h1>
        <h2>Randevu talepleri ve diger tum sorulariniz icin</h2>
        <span className='flex-container'>
            <BsFillTelephoneFill className='footer-icon' />
            <a id="phone-link" href="tel:314-343-3432">(+90) 532-176-6764</a>
        </span>
        <span className='flex-container'>     
            <BsFillPinMapFill className='footer-icon' />  
            <p className='sm-padding-p'>Cemalpasa Mah Bahar Cad Adenus Perla Sitesi No:31 Seyhan/Adana</p>
        </span>
    </div>
  )
}

export default Contact