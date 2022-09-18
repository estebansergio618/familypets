import React, { createContext, useState } from "react";

type ReserverContextProviderProp = {
  children: React.ReactNode;
};

type ReserverContextType = {
  showReserverModal: boolean | null;
  setShowReserverModal: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export const ReserverContext = createContext<ReserverContextType | null>(null);

export const ReserverContextProvider = ({
  children,
}: ReserverContextProviderProp) => {
  const [showReserverModal, setShowReserverModal] = useState<boolean | null>(false)
  return (
    <ReserverContext.Provider value={{showReserverModal, setShowReserverModal}}>
      {children}
    </ReserverContext.Provider>
  );
};
