import React, { useState } from 'react';
import CommunicationContext from './ContextHook';
import useDate from '../Date/Date';
import textImage from "./../assets/text.png";
import videoImage from "./../assets/video.png";
import callImage from "./../assets/call.png";
import { toast } from 'react-toastify';


const ContextCom = ({children}) => {
  const {day,year,month} = useDate();
  const [interaction , setInteraction] = useState([]);

  

  const handleInteraction = (type,name) => {
    // console.log(name)
    const typeImage = type === "text" ?  textImage : type === "call" ? callImage : type === "video" ? videoImage : "";
    const newFriend = {

      interactionType : type ,
      naming: name , 
      date: {day,year,month},
      image: typeImage

    }
    setInteraction([newFriend  , ...interaction]);

    toast.success(`${type.toUpperCase()} to ${name}`)
  }

  const data = {
     interaction , handleInteraction
  }

  return <CommunicationContext.Provider value={data}>{children}</CommunicationContext.Provider>;
};

export default ContextCom;