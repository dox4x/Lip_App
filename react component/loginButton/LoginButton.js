
import React from 'react';

const LoginButton = ({ onClick }) => {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '150px',
    height: '40px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    outline: 'none'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      Login
    </button>
  );
};

export default LoginButton;
