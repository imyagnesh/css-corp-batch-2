import React, { useContext } from 'react';
import RootStore from 'store';

const rootStore = new RootStore();

export const RootStoreContext = React.createContext<RootStore>({} as RootStore);

export const RootStoreProvider: React.FC = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  return useContext(RootStoreContext);
};
