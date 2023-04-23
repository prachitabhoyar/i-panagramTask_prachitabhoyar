import React from 'react';

const RadioGroup = ({ label, name, options, value, onChange ,colvalue}) => {
  return (
    <div className="row my-3">
      <div className="col-6">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className={colvalue?{colvalue}:"col-6"}>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
