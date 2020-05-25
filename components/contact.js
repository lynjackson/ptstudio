import React from 'react';
import '../public/styles/css/contact.css';


const Contact = (props)=>{
  return (
    <div id='section_contact'>
      <p id='headline_contact'>{props.headline}</p>
      <div id='contact-info_contact'>
        <div id='phoneAndEmail_contact'>
          <p id='phone_contact'>215.879.1879</p>
          <p id='email_contact'>hello@pt.studio</p>
        </div>
        <p id='address_contact'>2443 N. 50th Street, Philadelphia, PA</p>
      </div>
    </div>
  )
}



export default Contact;
