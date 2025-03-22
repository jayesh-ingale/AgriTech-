import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 mt-4 text-softWhite font-semibold bg-tealAccent2 rounded-xl transition duration-300 hover:bg-tealAccent1 animate-glow hover:animate-bounce"
    >
      {label}
    </button>
  );
};

export default Button;
