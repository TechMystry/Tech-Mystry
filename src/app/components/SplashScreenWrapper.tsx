"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ✅ Faster loading: 1 second
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* ✅ Keep children mounted behind loader */}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        {children}
      </div>

      {/* ✅ Loader covers UI until ready */}
      {isLoading && (
        <SplashScreen onComplete={() => setIsLoading(false)} />
      )}
    </>
  );
}
