import React, { useContext } from 'react';
import CommunicationContext from '../../Context/ContextHook';

import Call from './Call/Call';
import Video from './Video/Video';
import Text from './Text/Text';


const TimeLine = () => {

  const { text, call, video } = useContext(CommunicationContext);
  console.log(text)
  return (
    <div className='max-w-277.5 w-full mx-auto my-20 space-y-10'>
      <h1 className='font-bold text-5xl text-[#1f2937FF]'>TimeLine</h1>


      <div className='md:w-full w-11/12 mx-auto space-y-4'>

        {call.map((c,i)=><Call callData={c} key={i}/>)}
        {text.map((t,i)=><Text textData={t} key={i}/>)}
        {video.map((v,i)=><Video videoData={v} key={i}/>)}
      </div>
    </div>
  );
};

export default TimeLine;