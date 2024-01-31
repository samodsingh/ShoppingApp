import React from 'react';
import { Footer } from 'antd/es/layout/layout';
import { AiOutlineFacebook } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Row, Col } from 'antd';
import './Footerpage.css';

export default function Footerpage() {
  return (
    <Footer className='footer_container'>
      <Row className=' f_top_section'>
        <Col className='f_title_top' xs={20} sm={20} md={10} lg={10} xl={10}>
          <span>Get connected with us on social networks:</span>
        </Col>
        <Col className='f_icon_box' xs={20} sm={20} md={10} lg={10} xl={10}> 
          <a href='' className='f_top_icon'>
            <AiOutlineFacebook />
          </a>
          <a href='' className='f_top_icon '>
          <FaGoogle />
          </a>
          <a href='' className='f_top_icon '>
          <BsInstagram />
          </a>
          <a href='' className='f_top_icon '>
          <FaXTwitter />
          </a>
          <a href='' className='f_top_icon '>
          <FaGithub />
          </a>
          <a href='' className='f_top_icon me-4 text-reset'>
          <FaLinkedin />
          </a>
        </Col>
      </Row>

      <section className='f_bottom_section'>
          <Row className='f_row_bottom'>
        <Col className='col_style_bottom' xs={20} sm={20} md={6} lg={4} xl={4}>
              <h6 className='f_menu_title'>
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </Col>

            <Col xs={20} sm={20} md={4} lg={4} xl={4} className='col_style_bottom'>
              <h6 className='f_menu_title'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </Col>

            <Col xs={20} sm={20} md={4} lg={4} xl={4} className='col_style_bottom'>
              <h6 className='f_menu_title'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col xs={20} sm={20} md={6} lg={6} xl={6} className='col_style_bottom'>
              <h6 className='f_menu_title'>Contact</h6>
              <p>
                <span><FaHome /> </span>
                New York, NY 10012, US
              </p>
              <p>
              <IoIosMail /> <span>Samod0098@gmail.com</span>              
              </p>
              <p>
              <MdAddCall />
                 + 01 234 567 88
              </p>
              <p>
              <MdAddCall />

                + 01 234 567 89
              </p>
            </Col>
          </Row>
      </section>

      <div className='f_copyright_section'>
        © 2024 Copyright: 
        <a className='text-reset fw-bold' href='https://google.com/'>
          Google.com
        </a>
      </div>
    </Footer>
  );
}