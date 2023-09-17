// src/components/DisplayData.tsx
import React from 'react';

interface DisplayDataProps {
  data: {
    email: string;
    name: string;
    school: string;
  };
}

const DisplayData: React.FC<DisplayDataProps> = ({ data }) => {
  return (
    <div>
      <h2>Submitted Data</h2>
      <p>Email: {data.email}</p>
      <p>Name: {data.name}</p>
      <p>School: {data.school}</p>
    </div>
  );
};

export default DisplayData;
