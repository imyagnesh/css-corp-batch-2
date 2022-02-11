import React, { createContext } from 'react';
import CounterStore from '../store/counterStore';

const counterStore = new CounterStore();

export const CounterStoreContext = createContext();

export const CounterStoreProvider = ({ children }) => {
  return (
    <CounterStoreContext.Provider value={counterStore}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = () => {
  return React.useContext(CounterStoreContext);
};
