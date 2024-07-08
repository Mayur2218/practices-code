import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div class="container-fluid">
        <div className='pay'>
          <span>PAY SECURELY BY</span>
          <img src='payment.jpeg' className='paymentmethoed' alt='payment' />
          <img src='15days.png' className='daysreturn1' alt='free' />
          <span>15 DAYS FREE RETURNS </span>
          <img src='deliverytruck.jpeg' className='daysreturn1' alt='delivery' />
          <span>FREE DELIVERY </span>
          <img src='cash.png' className='daysreturn1' alt='cash' />
          <span>FREE DELIVERY</span>
          <span className='daysreturn1'>follow Us</span>
          <img src='social media.jpg' className='followus' alt='socialmedia' />
        </div>
      </div>
      <div className='copyright'>Copyright 2024 footwear.com |&nbsp;
        <a title="Privacy Policy" target="_blank" rel="noopener">Privacy Policy </a>
        &nbsp;| <a title="Terms and Conditions" target="_blank" rel="noopener">Site Terms</a>
        &amp; <a target="_blank" rel="noopener">Disclosures</a>.
        <span >Hosted by <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BbXfrYWAERYO5OLXv3Iv7gg%3D%3D">Mayur</a></span>
      </div>
    </div>
  )
}

export default Footer
