import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Smooth lerp could be added here for even better feel, but basic tracking works well with CSS transition
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-lusion">
      <div className="hero-background-wrapper">
        {/* More dynamic fluid background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
        >
          {/* Using a high-quality ink/fluid abstract video */}
          <source src="https://cdn.pixabay.com/video/2022/10/04/133558-757656605_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay-gradient">
          {/* Gradient maps to red theme */}
        </div>

        {/* Interactive Glow following mouse - Enhanced */}
        <div
          className="interactive-glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      </div>

      <motion.div
        className="hero-content-lusion"
        style={{ y: y1, opacity }}
      >
        <div className="hero-text-wrapper">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lusion-title"
          >
            Rayz.
          </motion.h1>

          <motion.div
            className="lusion-subtitle-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            <p className="lusion-subtitle">
              Connecting Ideals to <br />
              Uniquely Crafted Experiences
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="lusion-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;