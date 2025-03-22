import React from 'react';

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-softGray text-softWhite rounded-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-tealAccent1"
      />
    </div>
  );
};

export default InputField;
