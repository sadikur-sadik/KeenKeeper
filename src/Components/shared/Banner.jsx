import React from 'react';
import { FaPlus } from "react-icons/fa";

const Banner = () => {

  const info = [
    {count:10,title:"Total Friends"},
    {count:3,title:"On Track"},
    {count:6,title:"Need Attention"},
    {count:12,title:"Interactions This Month"},
  ]

  return (
    <div className='max-w-277.5 w-full mx-auto space-y-10 mt-20 pb-10 border-b border-b-gray-200'>
      <div className='space-y-4 flex flex-col justify-center items-center'>
        <h1 className='text-[#1f2937FF] font-bold md:text-5xl text-4xl text-center'>Friends to keep close in your life</h1>
        <p className='text-[#64748bFF] text-center'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.
        </p>
        <button className='bg-[#244d3fFF] text-white px-4 py-3 font-bold flex items-center gap-1 rounded-md mt-4'><FaPlus /><span>Add a Friend</span></button>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 rounded-md w-11/12 lg:w-12/12 mx-auto'>
       {info.map((inf , i)=>{return <div key={i} className='p-8 shadow flex flex-col justify-center items-center'>

        <div className='font-semibold text-[#244d3fFF] text-[32px] '>{inf.count}</div>
        <p className=' text-[#64748bFF] '>{inf.title}</p>
       </div>})}
      </div>
    </div>
  );
};

export default Banner;