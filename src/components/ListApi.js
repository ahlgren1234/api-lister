import React from 'react';
import CardApi from './CardApi';

const ListApi = ({ response, loading }) => {
  return (
    <div className="mx-2 mb-10">
      <h3 className="font-semibold text-xl text-slate-600">List of API's</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {response &&
          response.entries.map((api, index) => <CardApi api={api} />)}
      </div>
    </div>
  );
};

export default ListApi;
