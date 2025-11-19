import React, { useEffect, useState, useRef, CSSProperties } from "react";
import "./clover-throbber.scss";

interface CloverThrobberProps {
  duration?: number;
}


export const CloverThrobber: React.FC<CloverThrobberProps> = ({
  duration = 5000,
}) => {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const animateLoad = (timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }
    const elapsed = timestamp - startTimeRef.current;

    const newProgress = Math.min(100, (elapsed / duration) * 100);

    setProgress(newProgress);

    if (newProgress < 100) {
      animationFrameRef.current = requestAnimationFrame(animateLoad);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateLoad);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [duration]);

  if (progress >= 100) {
    return null;
  }

  const clipPercentage = 100 - progress;
  const fillLogoStyle: CSSProperties = {
    clipPath: `inset(${clipPercentage}% 0 0 0)`,
  };

  return (
    <div className="clover-throbber-overlay full">
      <div id="logo-container" className="mx-auto">
        <img
          id="base-logo"
          src={"/images/clover-logo.png"}
          alt="Clover Outline"
          className="clover-layer object-contain"
        />

        <img
          id="fill-logo"
          src={"/images/clover-logo.png"}
          alt="Clover Fill"
          className="clover-layer object-contain"
          style={fillLogoStyle}
        />
      </div>
    </div>
  );
};
