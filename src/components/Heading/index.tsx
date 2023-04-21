import React, { ReactElement } from 'react';
interface Props {
  label: string;
  children: ReactElement;
};

function Heading({label, children}: Props) {
  return (
    <div  className="flex justify-between mb-10">
      <div className="w-1/3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{label}</h2>
      </div>
      <div className="w-2/3">
        {children}
      </div>
    </div>
  );  
}

export default Heading;
