
import React from 'react';

const PasswordHint = () => {
  const hintStyle = {
    color: '#888',
    fontSize: '14px',
    margin: '10px 0',
  };

  return (
    <div style={hintStyle}>
      Your new password must be unique from those previously used.
    </div>
  );
};

export default PasswordHint;
