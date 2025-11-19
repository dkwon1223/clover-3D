import { createContext } from "react";
import { DeviceType } from "../global";

export interface DeviceContextType {
  selectedDevice: DeviceType;
  setSelectedDevice: (device: DeviceType) => void;
}

const defaultContextValue: DeviceContextType = {
  selectedDevice: DeviceType.GO,
  setSelectedDevice: () =>
    console.warn("setSelectedDevice was called without a provider"),
};

export const DeviceContext =
  createContext<DeviceContextType>(defaultContextValue);
