import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const panels = [
    {
      title: "We Are Rayz.",
      subtitle: "Creative Agency",
      // Realistic Agency/Studio Shot
      image: "/assets/about/about-01.jpg",
      number: "01"
    },
    {
      title: "Strategy First.",
      subtitle: "Before we design, we think.",
      desc: "Every pixel has a purpose. We analyze market data to build brands that don't just look good—they perform.",
      // Collaborative Meeting/Strategy
      image: "/assets/about/about-02.jpg",
      number: "02"
    },
    {
      title: "Design Lead.",
      subtitle: "Visual language that speaks.",
      desc: "We craft identities that resonate on a deeper level. It's not just about aesthetics; it's about connection.",
      // Designer working / Creative Chaos
      image: "/assets/about/about-03.jpg",
      number: "03"
    },
    {
      title: "Results Driven.",
      subtitle: "Beauty without function is art.",
      desc: "We build systems that work. ROI is our favorite metric.",
      // Analytics / Data / Success
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      number: "04"
    },
    {
      title: "Where Brands Rise.",
      subtitle: "The Next Chapter.",
      desc: "Join us in redefining the digital landscape.",
      // Futuristic / High-End / "Rising" Concept
      image: "/assets/about/about-05.jpg",
      number: "05"
    }
  ];

  return (
    <section ref={targetRef} className="about-horizontal" id="about">
      <div className="horizontal-sticky">
        <motion.div style={{ x }} className="horizontal-container">
          {panels.map((panel, index) => (
            <div key={index} className="h-panel">
              {/* Split layout for every panel to ensure image presence */}
              <div className="h-split-content">
                <div className="h-text-area">
                  <h2 className="h-title">{panel.title}</h2>
                  {panel.subtitle && <h3 className="h-subtitle">{panel.subtitle}</h3>}
                  {panel.desc && <p className="h-desc">{panel.desc}</p>}
                </div>
                <div className="h-image-area">
                  <img src={panel.image} alt={panel.title} loading="lazy" />
                  <div className="h-overlay"></div>
                </div>
              </div>
              <span className="h-number">{panel.number}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;