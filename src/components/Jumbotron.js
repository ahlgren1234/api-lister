import React, { useState } from 'react';

const Jumbotron = ({ fetchData }) => {
  const [value, setValue] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      fetchData({ params: { title: value } });
      setValue('');
    }
  };

  const handleButtonSearch = () => {
    if (value.length) {
      fetchData({ params: { title: value } });
      setValue('');
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-20 px-2">
      <h3 className="text-2xl text-white font-semibold">Search API's</h3>
      <div className="flex items-center mt-6 max-w-md mx-auto bg-white rounded-md">
        <input
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
          type="search"
          placeholder="Random facts about dogs"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button
          className="bg-blue-800 w-20 h-12 text-white rounded-r-md flex items-center justify-center"
          onClick={handleButtonSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
