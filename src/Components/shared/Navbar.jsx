import React from 'react';
import { NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className='border border-b-gray-200'>
      <nav className='flex flex-col md:flex-row justify-between items-center w-11/12 max-w-400 mx-auto my-4 '>
        <div>
          <span className='font-extrabold text-2xl text-[#1f2937FF]'>keen</span>
          <span className='font-bold text-2xl text-[#244d3fFF]'>Keeper</span>
        </div>
        <ul className='flex items-center md:mt-0 mt-5'>
          <li>
            <NavLink
              to="/"
              end // Prevents Home from staying active on other pages
              className={({ isActive }) =>
                `flex items-center gap-1 font-semibold md:px-4 md:py-3 px-3 py-2  rounded-md ${isActive ? 'bg-[#244d3f] text-white' : 'text-gray-600'}`
              }
            >
              <RiHome2Line /><span> Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-1 font-semibold md:px-4 md:py-3 px-3 py-2  rounded-md ${isActive ? 'bg-[#244d3f] text-white' : 'text-gray-600'}`
              }
            >
              <FaRegClock /><span>Timeline</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-1 font-semibold md:px-4 md:py-3 px-3 py-2   rounded-md ${isActive ? 'bg-[#244d3f] text-white' : 'text-gray-600'}`
              }
            >
              <FaChartLine /><span>Stats</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;