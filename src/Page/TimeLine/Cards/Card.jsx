import React from 'react';

const Card = ({data}) => {
  return (

    <div>
      <div className='flex gap-2 items-center border border-gray-200 rounded-md p-6'>
        <div className='w-10 h-10 flex '>
          <img src={data.image} className='object-cover w-full h-full' alt="" />
        </div>
        <div>
          <div className='flex gap-1 items-center'>
            <h4 className='font-semibold text-lg'>
             {data.interactionType }
            </h4>
            <p className='text-[#64748bFF]'> with <span>{data.naming}</span></p>
          </div>
          <div className='text-[#64748bFF]'>
            {data.date.month} {data.date.day} {data.date.year}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;