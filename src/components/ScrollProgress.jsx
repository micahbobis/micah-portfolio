import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollWidth((scrollTop / docHeight) * 100);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50">
      <div className="h-1 bg-accent transition-all duration-100" style={{ width: `${scrollWidth}%` }} />
    </div>
  );
}
