import React from 'react';

const Card = ({data}) => {
  return (

    <div>
      <div className='flex gap-2 items-center flex-col md:flex-row  border border-gray-200 rounded-md p-6'>
        <div className='w-10 h-10 flex '>
          <img src={data.image} className='object-cover w-full h-full' alt="" />
        </div>
        <div>
          <div className='flex flex-col md:flex-row  gap-1 items-center'>
            <h4 className='font-semibold text-lg text-center md:text-left'>
             {data.interactionType }
            </h4>
            <p className='text-[#64748bFF] text-center md:text-left flex  justify-center md:inline-block flex-col items-center'> with <span>{data.naming}</span></p>
          </div>
          <div className='text-[#64748bFF] text-center md:text-left'>
            {data.date.month} {data.date.day} {data.date.year}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;