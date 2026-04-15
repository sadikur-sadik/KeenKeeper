import React from 'react';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';
import Banner from '../Components/shared/Banner';
import { Outlet } from 'react-router';
  import { ToastContainer } from 'react-toastify';
const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Layout;