import React from 'react';

const Wrapper = ({ children }) => {
  const backgroundImageStyle = {
    padding: 0,
    margin: 0,
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/e-com-bg2.png)`,
    backgroundSize: 'cover',
  };

  const mediaQuery = window.matchMedia('(max-width: 768px)');

  if (mediaQuery.matches) {
    backgroundImageStyle.backgroundSize = 'contain';
  }

  return (
    <div style={backgroundImageStyle}>
      {children}
    </div>
  );
};

export default Wrapper;
