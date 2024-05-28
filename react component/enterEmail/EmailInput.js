
import React from 'react';

const EmailInput = ({ value, onChange }) => {
  const inputStyle = {
    width: '100%',
    height: '40px',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
  };

  return (
    <input
      type="email"
      placeholder="Enter your email"
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
};

export default EmailInput;
