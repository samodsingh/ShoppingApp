import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pagas/home/Home';
import Product from './pagas/product/Product';
import Contact from './pagas/contact/Contact';
import Loginpage from './pagas/login/Loginpage';
import { Layout } from 'antd';
import Footerpage from './components/Footer/Footerpage'
import Appheader from './components/headerpage/Appheader';
const { Footer } = Layout;

const App = () => {

  return (
    <Layout>     
           <BrowserRouter>      
            <Appheader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loginpage" element={<Loginpage />} />
          </Routes>
        </BrowserRouter>     
      <Footer
        style={{
          textAlign: 'center',padding:'0',
        }}
      >
        <Footerpage />
      </Footer>
    </Layout>
  );
};
export default App;