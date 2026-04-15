import React from 'react';

const useDate = () => {
  const now = new Date();

  const day = now.getDate();
  const year = now.getFullYear();
  const monthname = now.getMonth()
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = months[monthname];
  
  return {day,year,month};
};

export default useDate;