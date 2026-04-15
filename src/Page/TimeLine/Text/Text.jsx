import React from 'react';
import useDate from '../../../Date/Date';
import textImage from "./../../../assets/text.png";


const Text = ({textData}) => {
  console.log(textData.name)
 const{day,year,month} = useDate();
  return (
    <div>
      <div className='flex gap-2 items-center border border-gray-200 rounded-md p-6'>
        <div className='w-10 h-10 flex '>
          <img src={textImage} className='object-cover w-full h-full' alt="" />
        </div>
        <div>
          <div className='flex gap-1 items-center'>
            <h4 className='font-semibold text-lg'>
              Text
            </h4>
            <p className='text-[#64748bFF]'> with {textData.name}</p>
          </div>
          <div className='text-[#64748bFF]'>
            {month} {day} {year}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;