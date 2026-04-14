import React from 'react';
import Banner from '../../Components/shared/Banner';
import useHook from '../../Hook/Hook';
import Card from '../../Components/Friends/Card';

const Home = () => {

  const { friends, loading } = useHook()

  return (
    <div >
      <div>
        <Banner></Banner>
      </div>
      <div className='max-w-277.5 w-11/12 md:w-full mx-auto  py-10'>
        <h1 className='font-semibold mb-10 text-2xl text-[#1f2937FF]'>Your Friends</h1>
        {!loading
          ?
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 '>
            {friends.map((friend, i) => <Card key={i} friend={friend}></Card>)}
          </div>
          :
          <div className='flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>}

      </div>
    </div>
  );
};

export default Home;