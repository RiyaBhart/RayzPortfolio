import React from 'react';
import { motion } from 'framer-motion';
import './FluidBackground.css';

const FluidBackground = () => {
    return (
        <div className="fluid-bg-container">
            {/* SVG Filter Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="liquid">
                    {/* Turbulence creates noise/waves */}
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.015"
                        numOctaves="3"
                        result="warp"
                    />
                    {/* DisplacementMap uses the noise to distort the input image */}
                    <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale="80"
                        in="SourceGraphic"
                        in2="warp"
                    />
                </filter>
            </svg>

            {/* The content being distorted */}
            <div className="liquid-wrapper">
                <motion.div
                    className="fluid-orb orb-1"
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="fluid-orb orb-2"
                    animate={{
                        x: [0, -80, 40, 0],
                        y: [0, 60, -30, 0],
                        scale: [1, 1.1, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                <motion.div
                    className="fluid-orb orb-3"
                    animate={{
                        x: [0, 60, -100, 0],
                        y: [0, 40, -80, 0],
                        scale: [0.8, 1.2, 1, 0.8],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5
                    }}
                />
            </div>

            {/* Overlay for grain/texture */}
            <div className="bg-noise"></div>
        </div>
    );
};

export default FluidBackground;
