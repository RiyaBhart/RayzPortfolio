import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductionShowcase.css';

const ProductionShowcase = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="showcase-gallery">
            <div className="gallery-header">
                <h2>Previous Work</h2>
                <p>Selected Projects.</p>
            </div>

            <div className="gallery-grid">
                {/* Floating Item 1 (Video) */}
                <motion.div style={{ y: y2 }} className="gallery-item item-large">
                    <video autoPlay loop muted playsInline>
                        <source src="https://cdn.pixabay.com/video/2021/04/13/70962-536647463_large.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                {/* Floating Item 2 (Image) */}
                <motion.div style={{ y: y }} className="gallery-item item-medium offset-right">
                    <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" alt="Camera Gear" />
                </motion.div>

                {/* Floating Item 3 (Image) */}
                <motion.div style={{ y: y3 }} className="gallery-item item-small offset-left">
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" alt="Mountain Shoot" />
                </motion.div>

                {/* Floating Item 4 (Image) */}
                <motion.div style={{ y: y2 }} className="gallery-item item-wide">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" alt="Tech Setup" />
                </motion.div>
            </div>
        </section>
    );
};

export default ProductionShowcase;
