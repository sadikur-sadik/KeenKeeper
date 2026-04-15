import React, { useContext } from 'react';
import { FiPhoneCall } from "react-icons/fi";
{/* <FiPhoneCall /> */}
import { RiMessage2Line } from "react-icons/ri";

import { GoDeviceCameraVideo } from "react-icons/go";
import CommunicationContext from '../../../Context/ContextHook';


const Right = ({ newFriend }) => {

  const {text , setText , call ,setCall , video , setVideo} = useContext(CommunicationContext);


  const handleText = () => {

    
    setText([...text , newFriend]);
    // console.log(text)
  };
  const handleCall = () => {

    
    setCall([...call , newFriend]);
    
  };
  const handleVideo= () => {

    
    setVideo([...video , newFriend]);
    
  };

  // console.log(call,video,text)
  return (
    <div className='space-y-4'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 rounded-md w-auto lg:w-12/12 mx-auto '>
        <div className='p-8 shadow  flex flex-col justify-center items-center'>

          <div className='font-semibold text-[#244d3fFF] text-[32px] '>{newFriend.days_since_contact}</div>
          <p className=' text-[#64748bFF] '>Days Since Contact</p>
        </div>
        <div className='p-8 shadow flex flex-col justify-center items-center'>

          <div className='font-semibold text-[#244d3fFF] text-[32px] '>{newFriend.goal}</div>
          <p className=' text-[#64748bFF] '>Goal(Days)</p>
        </div>
        <div className='p-8 shadow flex flex-col justify-center items-center'>

          <div className='font-semibold text-[#244d3fFF] text-[32px] '>{newFriend.days_since_contact}</div>
          <p className=' text-[#64748bFF] '>Next Due</p>
        </div>
      </div>


      <div className='border border-gray-200 p-6 flex flex-col gap-4 rounded-md'>
        <div className=' flex justify-between items-center'>
          <p className='text-[#244d3fFF] font-semibold text-xl'>Relationship Goal</p>
          <button className='px-3 py-1 bg-gray-100 border rounded-md border-gray-200'>Edit</button>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-[#64748bFF]'>Contact Every</span> <span className='font-semibold'>30 Days</span>
        </div>
      </div>


      <div className='border border-gray-200 p-6 space-y-4 rounded-md'>
        <h1 className='text-bold'>Quick Check-In</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 rounded-md w-11/12 lg:w-12/12 mx-auto'>
            <div onClick={handleCall} className='flex justify-center items-center flex-col gap-4 p-4 rounded-md bg-gray-100 border border-gray-200'>
              <FiPhoneCall /> <p>Call</p>
            </div>
            <div onClick={handleText} className='flex justify-center items-center flex-col gap-4 p-4 rounded-md bg-gray-100 border border-gray-200'>
              <RiMessage2Line /> <p>Text</p>
            </div>
            <div onClick={handleVideo} className='flex justify-center items-center flex-col gap-4 p-4 rounded-md bg-gray-100 border border-gray-200'>
              <GoDeviceCameraVideo /> <p>Video</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Right;