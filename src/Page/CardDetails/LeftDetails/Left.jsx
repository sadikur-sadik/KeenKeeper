import React from 'react';
import { MdOutlineArchive } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Left = ({ newFriend }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='card flex justify-center items-center flex-col border border-gray-100 p-6 w-11/12 md:w-full mx-auto  rounded-md'>
        <figure className='w-20 h-20 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110'>
          <img
            src={newFriend.picture}
            alt="My friend"
            className='hisImage w-full h-full object-cover'
          />
        </figure>
        <div className='space-y-2 flex flex-col justify-center items-center mt-3'>
          <h1 className='text-[#1f2937FF] text-center font-semibold text-xl'>{newFriend.name}</h1>
          <p className='text-[#64748bFF] text-center'>{newFriend.days_since_contact}d ago</p>
          <div className={`badge rounded-full text-white font-bold py-3 px-4 ${newFriend.status === "overdue" ? "badge-error" : newFriend.status === "almost due" ? "badge-warning" : newFriend.status === "on track" ? "badge-success" : ""}`}>
            {newFriend.status}
          </div>
          <div className='text-center space-x-1 '>
            {newFriend.tags.map((tag, i) => <div key={i} className="badge rounded-full font-bold badge-soft badge-success">{tag}</div>)}
          </div>
          <div className='text-[#64748bFF] space-y-2'>
            <p className='text-center font-bold'>{newFriend.bio}</p>
            <p className='text-center'>Email: {newFriend.email}</p>
          </div>

        </div>
      </div>

      <div className='space-y-2 w-11/12 md:w-full mx-auto '>
        <div className='border rounded-md border-gray-200 p-2 flex justify-center text-center items-center gap-2 text-[#1f2937FF]'>
          <RiNotificationSnoozeLine /> <span>Snooze 2 Weeks</span>
        </div>
        <div className='border rounded-md border-gray-200 p-2 justify-center flex items-center gap-2 text-[#1f2937FF]'>
          <MdOutlineArchive /> <span>Archive</span>
        </div>
        <div className='border rounded-md border-gray-200 p-2 flex items-center justify-center'>
          <button className='justify-center text-red-600 flex items-center gap-2'><RiDeleteBin6Fill /> <span>Delete</span></button>
        </div>
      </div>

      
    </div>
  );
};

export default Left;