import React, { useState, useMemo } from "react";
import { DeviceType } from "../global";
import { DeviceContext, DeviceContextType } from "./DeviceContext";

interface DeviceProviderProps {
  children: React.ReactNode;
}

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>(
    DeviceType.FLEX
  );

  const contextValue: DeviceContextType = useMemo(
    () => ({
      selectedDevice,
      setSelectedDevice,
    }),
    [selectedDevice]
  );

  return (
    <DeviceContext.Provider value={contextValue}>
      {children}
    </DeviceContext.Provider>
  );
};
