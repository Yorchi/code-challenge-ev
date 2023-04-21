import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md ">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Code Challenge</h1>
        </div>

        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link to="/" className="border rounded-lg px-3 py-2 hover:bg-gray-200">
            Home
          </Link>
        </div>
      </div>
    </header>
  );  
}

export default Header;
