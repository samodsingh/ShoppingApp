import React from 'react';
import{Row, Col} from "antd"
import "./Footerpage.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

function Footerpage() {
  return (
    <div className='footer_container'> 
      <Row justify={'space-between'}>
        <Col xs={24} sm={23} md={6} lg={5} xl={5}>
          <div className="footer_brand"><a href="#">MyLOgo</a></div>
          <div className="site_footer_construction">
            <p>Free In Home Consultation</p>
            <a href="#" className="construction_number">1-800-216-8256</a>
          </div>
          <div className="social_link">
            <a href="#"><TiSocialFacebook /></a>
            <a href="#"><FaInstagramSquare /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><TiSocialTwitter /></a>
          </div>
      </Col>
      <Col xs={24} sm={24} md={6} lg={5} xl={5}>
          <ul className="footer_menu">
            <li className='menu_item'>
              <a href="#">“EFFORTLESS” MAGAZINE</a>
            </li>
            <li className='menu_item'>
              <a href="#">FAQS</a>
            </li>
            <li className='menu_item'>
              <a href="#">PRIVACY POLICY</a>
            </li>         
            <li className='menu_item'>
              <a href="#">LOCATION DIRECTORY</a>
            </li>              
            <li className='menu_item'>
              <a href="#">FRANCHISE OPPORTUNITIES</a>
            </li>              
          </ul>
      </Col>
      <Col xs={20} sm={24} md={6} lg={5} xl={5}>
        <div className="site_footer_menu">
          <ul className="footer_menu">
            <li className='menu_item'>
              <a href="#">WARRANTY</a>
            </li>
            <li className='menu_item'>
              <a href="#">CLEANING & MAINTENANCE</a>
            </li>
            <li className='menu_item'>
              <a href="#">TERMS</a>
            </li>         
            <li className='menu_item'>
              <a href="#">CONTACT US</a>
            </li>         
            <li className='menu_item'>
              <a href="#">CUSTOMER REVIEWS</a>
            </li>         
          </ul>
        </div>
      </Col>
      <Col xs={24} sm={23} md={6} lg={8} xl={8}>
         <div className="newsletter-callout">
           <p className="newsletter-callout-title">
             Sign-up for our newsletter for upcoming trends and deals
           </p>
           <div className="form_feild">
             <input className='feild' type="text" placeholder='email Address' />
             <button className='btn'>
              <a href="#">submit</a>
             </button>
           </div>
         </div>
      </Col>
      </Row>
    </div>
  )
}

export default Footerpage