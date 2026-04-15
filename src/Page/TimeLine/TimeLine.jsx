import React, { useContext } from 'react';
import CommunicationContext from '../../Context/ContextHook';
import { MdOutlineSpeakerNotesOff } from "react-icons/md";
// import { TbChartOff } from "react-icons/tb";

import Card from './Cards/Card';


const TimeLine = () => {

  const { interaction } = useContext(CommunicationContext);
  console.log(interaction);




  return (
    <div className='max-w-277.5 md:w-full min-h-[40vh] w-11/12 mx-auto my-20 space-y-10'>
      <h1 className='font-bold md:text-5xl text-3xl text-[#1f2937FF]'>TimeLine</h1>


      <div className='md:w-full w-11/12 mx-auto space-y-4'>


        {interaction.length === 0
          ?
          <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
            <MdOutlineSpeakerNotesOff size={80} className="opacity-30" />
            <h2 className="text-2xl font-bold text-center mt-4">No History Found</h2>
            <p className="text-sm text-center">Log a Call, Video, or Text to start your timeline.</p>
          </div>
          :
          interaction.map((interact, i) => <Card data={interact} key={i} />) 
        }
      </div>
    </div>
  );
};

export default TimeLine;