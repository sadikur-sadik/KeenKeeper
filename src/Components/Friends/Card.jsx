import React from 'react';

const Card = ({ friend }) => {
  
  return (
    <div className='card flex justify-center items-center flex-col border border-gray-100 p-6 hover:shadow-xl  rounded-md'>
      <figure className='w-20 h-20 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110'>
        <img
          src={friend.picture}
          alt="My friend"
          className='hisImage w-full h-full object-cover'
        />
      </figure>
      <div className='space-y-2 flex flex-col justify-center items-center mt-3'>
        <h1 className='text-[#1f2937FF] text-center font-semibold text-xl'>{friend.name}</h1>
        <p className='text-[#64748bFF] text-center'>{friend.days_since_contact}d ago</p>
        <div className='text-center space-x-1 '>
          {friend.tags.map((tag, i) => <div key={i} className="badge rounded-full font-bold badge-soft badge-success">{tag}</div>)}
        </div>
        <div className={`badge rounded-full text-white font-bold py-3 px-4 ${friend.status === "overdue" ? "badge-error" : friend.status === "almost due" ? "badge-warning" : friend.status === "on track" ? "badge-success": ""}`}>
          {friend.status}
        </div>
      </div>
    </div>
  );
};

export default Card;