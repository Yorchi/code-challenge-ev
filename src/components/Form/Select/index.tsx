import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  options: Array<any>;
  containerClassName?: string;
};

function Select({options, containerClassName, ...props}: Props) {
  return (
    <div className={`relative mt-2 rounded-md shadow-sm ${containerClassName}`}>
      <select
        className="block w-full rounded-md border-0 py-2 px-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-8"
        {...props}>
          <option>Please choose one option</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
      </select>
    </div>
  );  
}

export default Select;
