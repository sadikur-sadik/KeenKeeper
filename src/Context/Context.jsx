import React, { useState } from 'react';
import CommunicationContext from './ContextHook';


const ContextCom = ({children}) => {

  const [text , setText] = useState([]);
  const [call , setCall] = useState([]);
  const [video , setVideo] = useState([]);

  const data = {
    text , setText , call ,setCall , video , setVideo
  }

  return <CommunicationContext.Provider value={data}>{children}</CommunicationContext.Provider>;
};

export default ContextCom;