import React from 'react';
import { NavLink } from 'react-router';
import { HiExclamationTriangle } from 'react-icons/hi2';

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-400 w-full mx-auto flex flex-col items-center justify-center">
        
        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center max-w-2xl w-full">
          
          <div className="mb-6 md:mb-8 text-[#244d3fFF] transition-transform duration-300 hover:scale-110">
            <HiExclamationTriangle size={80} className="sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#244d3fFF] tracking-tighter mb-4">
            Oops!
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">
            Something went wrong.
          </h2>
          
          <p className="text-gray-600 mb-8 md:mb-12 max-w-md mx-auto text-base sm:text-lg">
            We apologize for the inconvenience. The page you are looking for might be unavailable, or an unexpected error occurred.
          </p>

          <NavLink
            to="/"
            className="inline-flex items-center gap-2 bg-[#244d3fFF] text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base sm:text-lg shadow-md hover:bg-opacity-90 transition-all duration-150 active:scale-95 group"
          >
            Go Back to Safety
            
          </NavLink>
          
        </div>

        
        
      </div>
    </div>
  );
};

export default Error;