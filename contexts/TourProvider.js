import React, { createContext, useContext, useState } from 'react';

const TourContext = createContext(undefined);

export const useTour = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTour must be used within a TourProvider');
  }

  return context;
};

export const TourProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  console.log('TourProvider -> count', count);

  const register = () => {
    setCount((count) => count + 1);
  };

  const deregister = () => {
    setCount((count) => count - 1);
  };

  const start = () => {
    setActiveIndex(1);
  };

  const close = () => {
    setActiveIndex(-1);
  };

  const next = () => {
    setActiveIndex((count) => count + 1);
  };

  const prev = () => {
    setActiveIndex((count) => count - 1);
  };

  return (
    <TourContext.Provider
      value={{
        register,
        deregister,
        count,
        activeIndex,
        start,
        close,
        next,
        prev,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};
