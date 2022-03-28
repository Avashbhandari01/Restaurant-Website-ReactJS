import React from 'react';
import '../Styles/Contact.css';
import Photo from '../Photos/Food13.PNG';

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide">
        <h1>CONTACT US</h1>
        <div className="contactDetails">
          <div className="infoOne">
            <p>CAFE</p>
            <p>662-862-1583</p>
          </div>
          <div className="infoTwo">
            <p>PRESS</p>
            <p>info@yumspress.com</p>
          </div>
          <div className="infoThree">
            <p>EMAIL</p>
            <p>info@yums.com</p>
          </div>
          <div className="infoFour">
            <p>EVENTS</p>
            <p>info@yumsevents.com</p>
          </div>
          <div className="infoFive">
            <p>BOOKINGS</p>
            <p>info@yumssales.com</p>
          </div>
          <div className="infoSix">
            <p>MARKETING</p>
            <p>info@yumspartners.com</p>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightPhoto" style={{ backgroundImage: `url(${Photo})` }}>

        </div>
      </div>
    </div>
  )
}

export default Contact;