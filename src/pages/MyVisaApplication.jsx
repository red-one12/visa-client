import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyVisaApplication = () => {
  const myVisaApplication = useLoaderData();
  return (
    <div>
      <p>Total Application of VISA: {myVisaApplication.length}</p>
      
    </div>
  );
};

export default MyVisaApplication;