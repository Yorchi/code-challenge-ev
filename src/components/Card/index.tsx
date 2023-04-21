import React, {ReactElement} from 'react';

interface Props {
  children: ReactElement;
};

function Card({children}: Props) {
  return (
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:w-full border border-gray-200">
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        {children}
      </div>
    </div>
  );  
}

export default Card;
