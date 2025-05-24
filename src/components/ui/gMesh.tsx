"use client";

import { useEffect, useState } from "react";
import { Gradient } from "@/ext/gradient";

export function MeshGradient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const gradient = new Gradient();
    // @ts-expect-error can't be bothered to fix types
    gradient.initGradient("#gradient-canvas");

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const opacity = isLoaded ? "1" : "0";

  return (
    <canvas
      id="gradient-canvas"
      className="absolute inset-0 w-full h-full transition-all duration-500"
      style={
        {
          "--gradient-color-1": "#0A1419",
          "--gradient-color-2": "#101E26",
          "--gradient-color-3": "#1A2D3A",
          opacity,
        } as React.CSSProperties
      }
      data-transition-in
    />
  );
}