// made by https://stackoverflow.com/users/12924484/ismoil-shokirov @ https://stackoverflow.com/a/68509243/10518428

import {React, Component, useState, useEffect} from 'react';

const useDeviceSize = () => {
  const [width, setWidth] = useState(999);
  const [height, setHeight] = useState(999);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

export default useDeviceSize;
