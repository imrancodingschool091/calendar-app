import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">All</option>
      <option value="Work">Work</option>
      <option value="Personal">Personal</option>
    </select>
  );
};

export default Filter;
