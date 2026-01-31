import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Hero from "./components/hero";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark"); // Default to dark for moon theme

  const dotRef = useRef(null);
  const blobRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Set moon theme colors
  useEffect(() => {
    document.documentElement.style.setProperty('--moon-primary', '#8a92ff');
    document.documentElement.style.setProperty('--moon-secondary', '#4dceea');
    document.documentElement.style.setProperty('--moon-dark', '#0a0e2a');
    document.documentElement.style.setProperty('--moon-darker', '#020617');
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";
    document.body.className = theme === "dark" ? "moon-theme" : "light-theme";

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest("a, button, input, textarea")) {
        blobRef.current.style.transform += " scale(1.5)";
        blobRef.current.style.background = 
          theme === "dark" 
            ? "radial-gradient(circle, var(--moon-primary), var(--moon-secondary))" 
            : "radial-gradient(circle, #ff6b6b, #f06595)";
      }
    };

    const handleMouseLeave = () => {
      blobRef.current.style.transform = blobRef.current.style.transform.replace(
        /scale\([^)]+\)/,
        ""
      );
      blobRef.current.style.background = 
        theme === "dark" 
          ? "radial-gradient(circle, #4d7cff, #1c7ed6)" 
          : "radial-gradient(circle, #4dabf7, #1c7ed6)";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && blobRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px,0)`;
        blobRef.current.style.transform = `translate3d(${position.current.x - 25}px, ${position.current.y - 25}px,0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [theme]);

  return (
    <div className="relative moon-theme min-h-screen">
      <style jsx global>{`
        .moon-theme {
          background: radial-gradient(ellipse at bottom, var(--moon-dark) 0%, var(--moon-darker) 100%);
          color: #f8fafc;
        }
        
        .light-theme {
          background: #f8fafc;
          color: #0f172a;
        }

        /* Stars background */
        .moon-theme::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0));
          background-size: 200px 200px;
          z-index: -1;
          animation: twinkle 5s infinite alternate;
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>

      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <ContactUs />
      <Footer theme={theme} />

      {/* Moon-themed cursor */}
      <div
        ref={blobRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          height: "50px",
          width: "50px",
          background: "radial-gradient(circle, #4d7cff, #1c7ed6)",
          transition: "transform 0.2s ease-out, background 0.3s ease",
          filter: "blur(8px)",
          mixBlendMode: "screen",
        }}
      ></div>

      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full pointer-events-none z-[9999]"
        style={{
          background: "#fff",
          boxShadow: "0 0 5px 2px rgba(138, 146, 255, 0.7)",
        }}
      ></div>
    </div>
  );
};

export default App;