import React from 'react';
import callImage from "./../../../assets/call.png"
import useDate from '../../../Date/Date';

const Call = ({callData}) => {
  const{day,year,month} = useDate();
  return (
    <div>
      <div className='flex gap-2 items-center border border-gray-200 rounded-md p-6'>
        <div className='w-10 h-10 flex '>
          <img src={callImage} className='object-cover w-full h-full' alt="" />
        </div>
        <div>
          <div className='flex gap-1 items-center'>
            <h4 className='font-semibold text-lg'>
              Call
            </h4>
            <p className='text-[#64748bFF]'> with <span>{callData.name}</span></p>
          </div>
          <div className='text-[#64748bFF]'>
            {month} {day} {year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;