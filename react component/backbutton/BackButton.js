
import React from 'react';

const BackButton = ({ onClick }) => {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    outline: 'none'
  };

  const iconStyle = {
    width: '12px',
    height: '12px',
    border: 'solid black',
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(135deg)',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <i style={iconStyle}></i>
    </button>
  );
};

export default BackButton;
