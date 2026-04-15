import React, { useContext } from 'react';
import CommunicationContext from '../../Context/ContextHook';

// import Call from './Call/Call';
// import Video from './Video/Video';
// import Text from './Text/Text';
import Card from './Cards/Card';


const TimeLine = () => {

  const {  interaction } = useContext(CommunicationContext);
  console.log(interaction);
// text, call, video ,
  


  return (
    <div className='max-w-277.5 md:w-full w-11/12 mx-auto my-20 space-y-10'>
      <h1 className='font-bold md:text-5xl text-3xl text-[#1f2937FF]'>TimeLine</h1>


      <div className='md:w-full w-11/12 mx-auto space-y-4'>
{/* 
        {call.map((c,i)=><Call callData={c} key={i}/>)}
        {text.map((t,i)=><Text textData={t} key={i}/>)}
        {video.map((v,i)=><Video videoData={v} key={i}/>)} */}

        {interaction.map((interact , i) => <Card data={interact} key={i}/>)}
      </div>
    </div>
  );
};

export default TimeLine;