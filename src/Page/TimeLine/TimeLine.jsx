import React, { useContext, useState } from 'react';
import CommunicationContext from '../../Context/ContextHook';
import { MdOutlineSpeakerNotesOff } from "react-icons/md";
import Card from './Cards/Card';
import { LuMessageSquareOff } from "react-icons/lu";
import { BsCameraVideoOff } from "react-icons/bs";
import { HiPhoneMissedCall } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";



const TimeLine = () => {

  const { interaction } = useContext(CommunicationContext);
  // console.log(interaction);
  const [sort, setSort] = useState([]);
  const [sortType, setSortType] = useState("DEFAULT")

  // const handleSort = (type) => {

  //   if (type === "text") {
  //     const newSort = interaction.filter(int => int.interactionType === "text");
  //     setSort(newSort);
  //     setSortType("Text");
  //   }
  //   else if (type === "call") {
  //     const newSort = interaction.filter(int => int.interactionType === "call");
  //     setSort(newSort);
  //     setSortType("Call");
  //   }
  //   else if (type === "video") {
  //     const newSort = interaction.filter(int => int.interactionType === "video");
  //     setSort(newSort);
  //     setSortType("Video");
  //   }
  //   else if(type === ""){setSort([]) ; setSortType("Default");}
  // };


  const handleSort = (type) => {
    if (!sort) {
      setSort([]);

      return;
    }
    else {
      const newSort = interaction.filter(int => int.interactionType == type);
      setSort(newSort);
      setSortType(type === "" ? "DEFAULT" : type.toUpperCase());
    }
  }






  return (
    <div className='max-w-277.5  min-h-[40vh] w-11/12 mx-auto my-20 space-y-10'>
      <h1 className='font-bold md:text-5xl text-3xl text-[#1f2937FF]'>TimeLine</h1>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 flex gap-1 justify-center items-center"><span>{sortType}</span><MdKeyboardArrowDown className='w-5 h-5'/></div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

          <li onClick={() => handleSort("")}><a>Default</a></li>
          <li onClick={() => handleSort("text")}><a>Text</a></li>
          <li onClick={() => handleSort("call")}><a>Call</a></li>
          <li onClick={() => handleSort("video")}><a>Video</a></li>
        </ul>
      </div>
      <div className='md:w-full w-11/12 mx-auto space-y-4'>


        {interaction.length === 0
          ?
          <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
            <MdOutlineSpeakerNotesOff size={80} className="opacity-30" />
            <h2 className="text-2xl font-bold text-center mt-4">No History Found</h2>
            <p className="text-sm text-center">Log a Call, Video, or Text to start your timeline.</p>
          </div>
          : (

            sortType === "DEFAULT" ? interaction.map((interact, i) => <Card data={interact} key={i} />)
              :
              sort.length == 0 ? (
                <div className="flex flex-col items-center gap-2 text-gray-400 mt-10">
                  {sortType === "TEXT" && <LuMessageSquareOff  size={40} className="opacity-20" />}
                  {sortType === "CALL" && <HiPhoneMissedCall size={40} className="opacity-20" />}
                  {sortType === "VIDEO" && <BsCameraVideoOff  size={40} className="opacity-20" />}
                  <p className="text-sm font-medium text-center">No {sortType.toLowerCase()} interaction found</p>
                </div>
              )
                
            : sort.map((interact, i) => <Card data={interact} key={i} />)
            // sort.length == 0
            //   ?
            //   interaction.map((interact, i) => <Card data={interact} key={i} />)
            //   :
            //   sort.map((interact, i) => <Card data={interact} key={i} />)

      )

        }
    </div>
    </div >
  );
};

export default TimeLine;