import React from 'react';
import logoXL from "./../../assets/logo-xl.png";
import insta from "./../../assets/instagram.png";
import fb from "./../../assets/facebook.png";
import x from "./../../assets/twitter.png";

const Footer = () => {
  return (
    <div className='bg-[#244d3fFF] py-20'>
      <div className=' max-w-277.5 mx-auto w-11/12  flex flex-col justify-center items-center space-y-6'>
        <div className='space-y-4 flex flex-col justify-center items-center'>
          <div className='w-60 md:w-auto'><img src={logoXL} alt="footer logo" /></div>
          <div className='text-white text-center'>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </div>
        </div>

        <div>
          <h3 className='text-white font-semibold text-xl'>Social Links</h3>
        </div>
        <div className='flex gap-3'>
          <div><img src={insta} alt="instagram" /></div>
          <div><img src={fb} alt="facebook" /></div>
          <div><img src={x} alt="x" /></div>
        </div>
        <div className='flex justify-between md:flex-row flex-col-reverse items-center w-full gap-5'>
          <p className='text-[#fafafaFF]/60 text-sm text-center'>© 2026 KeenKeeper. All rights reserved.</p>
          <ul className='text-[#fafafaFF]/60 text-sm flex text-center flex-col md:flex-row gap-3 md:gap-5'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;