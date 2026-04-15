import React from 'react';
import Chart from './Chart/Chart';
const Stats = () => {
  return (
    <div className='max-w-277.5 md:w-full w-11/12 mx-auto my-20 space-y-10'>
      <h1 className='font-bold md:text-5xl text-3xl text-[#1f2937FF]'>Friendship Analytics</h1>

      <div className='md:w-full w-11/12 mx-auto p-8 border border-gray-200 rounded-md'>
        <h3 className='text-[#244d3fFF] font-semibold text-xl'>By Interaction Type</h3>
        <div className='flex justify-center items-center mt-10'>
          <Chart></Chart>
        </div>
      </div>
    </div>
  );
};

export default Stats;