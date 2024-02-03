import React from 'react';
import "./Contact.css";
import { Col, Row } from 'antd';
// add map=====================
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


function Contact() { 
  const position = {lat: 53.54992, lng: 10.00678};

  return  (
    <div className='contact_container'>
      <section className="banner_top ">
        <div>
          <h1>Contacts & Map Example</h1>
          <h3>Construction Form Design</h3>
        </div>
      </section>
      <section className="contacts_us">
        <div className="contacts_box">
          <h1>CONTACT US</h1>
          <ul>
            <li>
              <h1>SERVICE OFFICE</h1>
              <div className='list_text'>
                <p>service@example.com</p>
                <p>+44 555 00 00 15</p>
              </div>
              <h4>+44 555 00 00 15</h4>
            </li>
            <li>
              <h1>CONSULTATION</h1>
              <div className='list_text'>
                <p>consulting@example.com</p>
                <p>+44 555 00 00 15</p>
              </div>
              <h4>Emma Sheffield</h4>
            </li>
            <li>
              <h1>CONTACT</h1>
              <div className='list_text'>
                <p>contact@example.com</p>
                <p>+44 555 00 00 15</p>
              </div>
              <h4>Kathryn Peel</h4>
            </li>
          </ul>
        </div>
      </section>
      <section className="our_contact_section">
        <h1>Our Contacts</h1>
        <h3>Construction Form Design</h3>
        <Row>
          <Col>
            <div>
            <APIProvider apiKey={'YOUR API KEY HERE'}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  ) 
}

export default Contact;