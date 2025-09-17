"use client";

import { useEffect, useRef, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Instant page load - no delays whatsoever
    setIsLoading(false);
    el.classList.add("page-load");
    el.classList.remove("page-load");
    el.classList.add("page-enter");
    el.classList.remove("page-enter");
  }, []);

  return (
    <div 
      ref={ref} 
      className={`page-transition-container ${isLoading ? 'page-loading' : ''}`}
      style={{ 
        minHeight: '100vh',
        transform: 'translateZ(0)', // Force hardware acceleration
      }}
    >
      {children}
    </div>
  );
}

