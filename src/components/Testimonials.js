import React, { useRef } from 'react';
import { motion } from 'framer-motion'; // removed unused useScroll, useTransform
import './Testimonials.css';

const Testimonials = () => {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      text: "Rayz completely elevated our clinic’s identity. From the logo to the interior branding, everything now reflects the premium and professional image we always envisioned.",
      author: "Dr. Tarwani Bhart",
      role: "Founder, Crown & Care Dental Clinic",
      color: "#6e2326" // Primary Red
    },
    {
      text: "Our online presence has never been stronger. Rayz brought structure, creativity, and consistency to our social media, and the engagement growth speaks for itself.",
      author: "Ghullam uddin",
      role: "Director, CNC Dental Clinic",
      color: "#5c171a" // Darker Red
    },
    {
      text: "Rayz captured our event with exceptional professionalism. The highlight video perfectly showcased the energy, innovation, and impact of SysLab’s initiative.",
      author: "Mr. Azmat",
      role: "Project Manager, SysLab",
      color: "#965550" // Secondary Red
    },
    {
      text: "The product visuals delivered by Rayz truly represent the elegance of our brand. The attention to detail and lighting made our collection stand out beautifully.",
      author: "Mariam Sheikh",
      role: "Creative Director, Timeless Era",
      color: "#bc726c" // Accent Red
    }
  ];

  return (
    <section ref={sectionRef} className="reviews-section" id="testimonials">
      <div className="reviews-container">
        {/* Left Side: Sticky Text */}
        <div className="reviews-left">
          <div className="sticky-content">
            <h2 className="vision-title">Your Vision.</h2>
            <h2 className="vision-subtitle">Our Blueprint.</h2>
            <p className="vision-text">
              We believe that the most powerful brands are built on a foundation of shared vision.
              At Rayz, we don't just execute tasks; we internalize your goals and amplify them
              through design and strategy.
            </p>
            <p className="vision-text">
              Client collaboration is at the heart of our process. Every review is a testament
              to a partnership that pushed boundaries.
            </p>
          </div>
        </div>

        {/* Right Side: Stacking Cards */}
        <div className="reviews-right">
          {testimonials.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              index={index}
              targetScale={1 - (testimonials.length - index) * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, index, targetScale }) => {
  return (
    <div className="review-card-wrapper" style={{ top: `calc(10vh + ${index * 20}px)` }}>
      <motion.div
        className="review-card"
        style={{
          backgroundColor: review.color,
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-content">
          <p className="review-quote">"{review.text}"</p>
          <div className="review-author">
            <h4>{review.author}</h4>
            <span>{review.role}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
