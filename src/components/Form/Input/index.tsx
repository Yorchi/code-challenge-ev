import React, { InputHTMLAttributes } from 'react';
import search from '../../../assets/images/search.png';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
};

function Input(props: Props) {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <img src={search} className="w-4" alt="Search Icon" />
      </div>
      <input
        className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...props}
        />
    </div>
  );  
}

export default Input;
