'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect: any;

    if (
      typeof window !== 'undefined' &&
      (window as any).VANTA &&
      (window as any).THREE
    ) {
      vantaEffect = (window as any).VANTA.NET({
        el: "#vanta-bg", // Your selector
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      id="vanta-bg"
      style={{
        width: '100vw',
        height: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
      }}
    >
      <h1>Tried VantaJs </h1>
    </div>
  );
}
