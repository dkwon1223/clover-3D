import { useState, useEffect, useContext } from "react";
import Scene from "../Scene/Scene";
import { CloverThrobber } from "../Throbber/CloverThrobber";
import { DeviceContext } from "../../Context/DeviceContext";

// swap for this when choosing points on a mesh
// import Scene from '../ClickableMesh/ClickableMesh'

const MINIMUM_LOAD_TIME_MS = 3000;

export default function DeviceSwitch() {
  const { selectedDevice } = useContext(DeviceContext);
  const [showThrobber, setShowThrobber] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowThrobber(false);
    }, MINIMUM_LOAD_TIME_MS);
    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timerId);
  }, []);

  return (
    <section className="w-full h-full">
      {showThrobber && <CloverThrobber duration={MINIMUM_LOAD_TIME_MS} />}
      <Scene deviceType={selectedDevice} />
      {/* <Scene /> */}
    </section>
  );
}
