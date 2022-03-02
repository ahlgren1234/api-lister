import React from 'react';

const CardApi = ({ api }) => {
  const renderDetail = (text, field) => (
    <p>
      {text}: <span className="font-semibild">{api[field] || '-'}</span>
    </p>
  );

  return (
    <a href={api.Link} target="_blank">
      <div className="border-2 p-2 border-blue-700 text-gray-600 rounded-md bg-blue-100 hover:bg-blue-300 cursor-pointer h-full">
        {renderDetail('Title', 'API')}
        {renderDetail('Description', 'Description')}
        {renderDetail('Auth', 'Auth')}
        {renderDetail('Cors', 'Cors')}
        {renderDetail('Category', 'Category')}
      </div>
    </a>
  );
};

export default CardApi;
