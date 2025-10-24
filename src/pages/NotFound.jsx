import React from 'react';
import Error404Image from '../assets/Error-404-Page-Not-Found.png';

const NotFound = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <img
        src={Error404Image}
        alt="Error 404 - Page Not Found"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default NotFound;
