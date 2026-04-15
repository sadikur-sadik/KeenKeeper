import React from 'react';
import { useParams } from 'react-router';
import useHook from '../../Hook/Hook';
import Left from './LeftDetails/Left';
import Right from './RightDetails/Right';




const CardDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useHook();

  

  const newFriend = friends.find(friend => friend.id == id);
  
  return (
    <div className='max-w-277.5 w-11/12  mx-auto my-20'>
      {loading
      
      ?
      
      <div className='flex justify-center items-center'>
        <span className="loading loading-spinner loading-xl"></span>
      </div> 
      
      :

        <div className='flex flex-col md:flex-row gap-6 w-11/12 md:w-full'>
          <div className='w-auto mx-auto max-w-87.5'>
            <Left newFriend={newFriend}></Left>
          </div>
          <div className='w-11/12 md:w-auto mx-auto '>

          <Right newFriend={newFriend}></Right>  

          </div>
        </div>}
    </div>
  );
};

export default CardDetails;