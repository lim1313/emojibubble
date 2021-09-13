import React, { Fragment, useState, useEffect } from 'react';

const AutoExpire = ({ children }) => {
  const [isExpired, setExpired] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpired(true);
    }, 6000);
  }, [isExpired]);

  if (isExpired) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
};

export default AutoExpire;
