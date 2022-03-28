import React from 'react'
import '../Styles/Footer.css';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FaTripadvisor } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="leftText">
          <p className='headerText'>YUMS.</p>
          <p>1445 Floral Ave. New York City,<br />United States</p>
          <p>MONDAY - FRIDAY<br />6:00 AM TO 9:00 PM</p>
          <p>SATURDAY - SUNDAY<br />10:00 AM TO 8:00 PM</p>
        </div>
        <div className="centerText">
          <p className='officeLocation'>Office: 56C Gimblinton Street, New York<br />City United States</p>
          <p>Contact : 662-862-1583</p>
          <div className="socials">
            <a href='https://www.tripadvisor.com/'><FaTripadvisor /></a>
            <a href='https://www.facebook.com/'><BsFacebook /></a>
            <a href='https://www.instagram.com/avash_bdr/'><BsInstagram /></a>
          </div>
        </div>
        <div className="rightText">
          <p>Powered by Yums.com</p>
        </div>
      </div>
    </>
  )
}

export default Footer