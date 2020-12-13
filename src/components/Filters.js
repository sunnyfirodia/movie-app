import React from 'react';
import Select from 'react-select';

const Filters = ({ handleSort, sortOrder }) => {
  const options = [
    { value: 'name', label: 'Movie Name' },
    { value: 'year', label: 'Release Year' }
  ];

  return (
      <div className="sortBy">
          Sort by 
        <Select
          value={sortOrder}
          className="select-filter"
          onChange={handleSort}
          options={options}
        />
      </div>
  );
};

export default Filters;
