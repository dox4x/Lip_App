
import React from 'react';

const WelcomeMessage = () => {
  const messageStyle = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
  };

  return (
    <div style={messageStyle}>
      Welcome back! Glad to see you, Again!
    </div>
  );
};

export default WelcomeMessage;
