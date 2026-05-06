import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Designs from "./components/Designs";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";
import { useReveal } from "./hooks/useReveal";

export const GA_TRACKING_ID = "G-L43EVZ91CL";

export default function App() {
  useLenis();
  useReveal();

  useEffect(() => {
    // Load script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Setup dataLayer + gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };

    // Initial pageview
    window.gtag("js", new Date());
    window.gtag("config", GA_TRACKING_ID);
  }, []);

  useEffect(() => {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: #0a0a0a;
      z-index: 200;
      transition: transform 1.1s cubic-bezier(0.7, 0, 0.2, 1);
      pointer-events: none;
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.style.transform = "translateY(-100%)";
    });
    setTimeout(() => overlay.remove(), 1400);
  }, []);

  return (
    <div className="grain relative">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Marquee />
        <Work />
        <Designs />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
