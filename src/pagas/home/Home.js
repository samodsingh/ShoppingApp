import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Collapse } from 'antd';
//import icons
import { AiFillTrophy } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BsStopwatch } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { TbSettingsStar } from "react-icons/tb";
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaTractor } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
// import {LbImg} from "../../images";

const items = [
  {
    key: '1',
    label: 'Safety',
    children: <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata</p>,
  },
  {
    key: '2',
    label: 'Customer Service'
    ,
    children: <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata</p>,
  },
  {
    key: '3',
    label: 'Integrity',
    children: <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata</p>,
  },
];

export default function Home() {

  return (
    <>
      <section className='carousel_secton'>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className='swiper-slide'>
            <h1>samod kumar singh</h1>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        </Swiper>
      </section>
      <section className="about_value_section">
        <Row justify={'space-evenly'} className='row_about_value'>
          <Col className="about_col" xs={22} sm={22} md={12} lg={10} xl={10}>
            <h3>About Us</h3>
            <div className="about_contents">
              <h1>WE DELIVER LANDMARK PROJECTS</h1>
              <p>We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
              <div className='build_details'>
                <ul>
                  <li>
                    <div><AiFillTrophy /></div>
                    <p> WE'VE REPUTION FOR EXCELLENCE</p>
                  </li>
                  <li>
                    <div><AiOutlineSetting /></div>
                    <p>WE BUILD PARTNERSHIPS</p>
                  </li>
                  <li>
                    <div><AiFillLike /></div>
                    <p>GUIDED BY COMMITMENT</p>
                  </li>
                  <li>
                    <div><AiOutlineTeam /></div>
                    <p>A TEAM OF PROFESSIONALS</p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="value_col" xs={22} sm={22} md={12} lg={10} xl={10}>
            <h1>OUR VALUES</h1>
            <p>Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.</p>
            <div className='collapse_style'>
              <Collapse accordion items={items} />
            </div>
          </Col>
        </Row>

      </section>
      <section className="project_section">
        <ul className="project_details">
          <li>
            <div className="project_icon"><FaHome /></div>
            <div className="project_count">1789</div>
            <p className="project_title"> TOTAL PROJECTS</p>
          </li>
          <li>
            <div className="project_icon"><GrUserWorker /></div>
            <div className="project_count"> 647</div>
            <p className="project_title"> STAFF MEMBERS</p>
          </li>
          <li>
            <div className="project_icon"><BsStopwatch /></div>
            <div className="project_count">4000</div>
            <p className="project_title"> HOURS OF WORK</p>
          </li>
          <li>
            <div className="project_icon"><CiGlobe /></div>
            <div className="project_count"> 44</div>
            <p className="project_title"> COUNTRIES EXPERIENCE</p>
          </li>
        </ul>
      </section>
      <section className='specialists_section'>
        <p>WE ARE SPECIALISTS IN</p>
        <h1>WHAT WE DO</h1>
        <Row className='specialists_section_row' justify={'space-around'} style={{textAlign:'center'}}>
          <Col xs={24} sm={24} md={8} lg={7} xl={7}>
            <ul className='specialists_left_items'>
              <li>
                <div className="specialists_icon"><BsBuildings /></div>
                <div className="specialists_title">
                  <h2>HOME CONSTRUCTION</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
              </li>
              <li>
                <div className="specialists_icon"><TbSettingsStar /></div>
                <div className="specialists_title">
                  <h2>BUILDING REMODELS</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
              </li>
              <li>
                <div className="specialists_icon"><GiPencilRuler /></div>
                <div className="specialists_title">
                  <h2>INTERIOR DESIGN</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8} lg={7} xl={7}>            
              <div className="member_img">
                <img src=" " alt="Lb image" />
              </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={7} xl={7}>
            <ul className='specialists_left_items'>
              <li>
                <div className="specialists_icon"><AiOutlineAntDesign /></div>
                <div className="specialists_title">
                  <h2>EXTERIOR DESIGN</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
              </li>
              <li>
                <div className="specialists_icon"><FaTractor /></div>
                <div className="specialists_title">
                  <h2>RENOVATION</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
              </li>
              <li>
                <div className="specialists_icon"><FaHelmetSafety /></div>
                <div className="specialists_title">
                  <h2>SAFETY MANAGEMENT</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </section>

    </>
  );
}
