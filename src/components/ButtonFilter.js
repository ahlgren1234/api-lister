import React, { useEffect } from 'react';
import useAxios from '../hooks/useAxios';

const ButtonFilter = () => {
  const {
    fetchData,
    response: { categories },
    loading,
  } = useAxios('categories');

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse my-5 inline-block text-center">
        {[...Array(35).keys()].map((num) => (
          <div
            key={num}
            className="h-7 w-20 bg-gray-300 m-1 rounded-sm inline-block"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-center my-5">
      {categories &&
        categories.map((button) => (
          <button className="bg-blue-400 text-white m-1 pp-1 px-2 rounded-sm hover:bg-blue-500">
            {button}
          </button>
        ))}
    </div>
  );
};

export default ButtonFilter;
