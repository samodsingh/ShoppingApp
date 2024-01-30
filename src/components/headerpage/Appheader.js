import React from 'react';
import { Col, Row } from 'antd';
import './Appheader.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Appheader() {

    return (
        <div className='appheader-container'>
            <div className='header-top'>
                <Row style={{ display: 'flex', justifyContent: 'space-evenly',textAlign:'center' }}>
                    <Col xs={18} sm={10} md={12} lg={12} xl={12}>
                        <div className='add_location'><a href="#"> <FaLocationDot /> 9051 Constra Incorporate, USA</a></div>
                    </Col>
                    <Col xs={18} sm={10} md={8} lg={8} xl={8}>
                        <div className='icons'>
                            <a href="#"><FaInstagramSquare /></a>
                            <a href="#"><FaGithub /></a>
                            <a href="#"><FaXTwitter /></a>
                            <a href="#"><AiOutlineFacebook /></a>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='header_bottom'>
                <Row style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', alignItems: 'center', padding: '5px' }}>
                    <Col xs={24} sm={10} md={6} lg={7} xl={7}>
                        <div className='header_logo'><h1>MyLoGo</h1></div>
                    </Col>
                    <Col xs={24} sm={2} md={2} lg={4} xl={4}></Col>
                    <Col xs={24} sm={10} md={5} lg={4} xl={4}>
                        <div className='info_box_content'>
                            <p className='info_box_title'> Call Us</p>
                            <p className='info_box_subtitle'><a href="#">(+91) 6203380073</a></p>
                        </div>                        
                    </Col>
                    <Col xs={24} sm={12} md={5} lg={4} xl={4}>
                        <div className='info_box_content'>
                            <p className='info_box_title'>Email Us</p>
                            <p className='info_box_subtitle'><a href="#">samod0098@gmail.com</a></p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={5} lg={4} xl={4}>
                       <div className='info_box_content last'>
                            <p className='info_box_title'>Global Certificate</p>
                            <p className='info_box_subtitle'><a href="#">ISO 9001:2017</a></p>
                        </div>                    </Col>
                </Row>
            </div>
            <nav>
                <input type="checkbox" id="nav-toggle" />
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/Product">Product</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/loginpage">Login</Link>
                </div>

                <label for="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
        </div>
    )
}

export default Appheader