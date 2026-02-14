import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import './OurWork.css';

const OurWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,

      name: "Crown & Care Dental Clinic – Complete Brand Identity",
      category: "Branding",
      image: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
      client: "Crown & Care Dental Clinic",
      challenge: "Building a premium yet approachable brand identity that reflects trust, hygiene, and modern dental care.",
      strategy: "We crafted a clean and clinical aesthetic using soft blues, balanced whitespace, and refined typography to communicate professionalism and comfort.",
      execution: "Logo design, brand guidelines, clinic stationery, interior branding elements, website revamp, and cohesive social media visuals.",
      results: "Stronger brand recall, elevated clinic perception, and increased patient inquiries within the first 3 months."


    },
    {
      id: 2,
      name: "CNC Dental Clinic – Social Media Management",
      category: "Social Media Management",
      image: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
      client: "CNC Dental Clinic",
      challenge: "Low engagement and inconsistent online presence across social platforms.",
      strategy: "Developed a content calendar focused on educational posts, smile transformations, patient testimonials, and dental awareness campaigns.",
      execution: "Monthly content creation, reel production, community engagement, ad campaigns, and performance analytics tracking.",
      results: "150% growth in Instagram reach and a steady increase in appointment bookings via social media."
    },
    {
      id: 3,
      name: "SysLab – Event Coverage & Video Editing",
      category: "Event Production",
      image: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      client: "SysLab",
      challenge: "Capturing the energy and professionalism of a large-scale tech education event.",
      strategy: "Focused on cinematic storytelling, dynamic angles, and real-time testimonials to highlight engagement and innovation.",
      execution: "Full event coverage, highlight reel production, speaker interviews, social media cutdowns, and branded motion graphics.",
      results: "High-performing event recap video with strong engagement across LinkedIn and Instagram."
    },
    {
      id: 4,
      name: "Timeless Era – Premium Product Photography",
      category: "Product Photography",
      image: "linear-gradient(135deg, #3e5151 0%, #decba4 100%)",
      client: "Timeless Era",
      challenge: "Showcasing luxury products in a way that reflects elegance and exclusivity.",
      strategy: "Used soft lighting, neutral backdrops, and minimalistic compositions to enhance product detailing.",
      execution: "Studio photography, lifestyle shoots, creative direction, color grading, and optimized visuals for e-commerce and social platforms.",
      results: "Elevated brand perception and improved product engagement across digital platforms."
    },
    {
      id: 5,
      name: "CNC Dental Clinic – Influencer Marketing Campaign",
      category: "Influencer Marketing",
      image: "linear-gradient(135deg, #1d4350 0%, #a43931 100%)",
      client: "CNC Dental Clinic",
      challenge: "Creating awareness among young adults for cosmetic dentistry services.",
      strategy: "Partnered with lifestyle and beauty influencers to promote smile makeovers and dental treatments authentically.",
      execution: "Influencer collaborations, in-clinic experience shoots, before-after campaigns, and story-based promotional content.",
      results: "Expanded audience reach by 3x and increased cosmetic dentistry consultations by 40%."
    },
  ];

  return (
    <section className="work-lusion">
      <div className="work-lusion-container">
        <h2 className="lusion-section-title">Selected Works</h2>

        <div className="work-lusion-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="work-lusion-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="work-lusion-info">
                <span className="work-num">0{index + 1}</span>
                <h3 className="work-name">{project.name}</h3>
                <span className="work-cat">{project.category}</span>
              </div>
              <div className="work-arrow">
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop-lusion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content-lusion"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-lusion" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className="modal-header-lusion" style={{ background: selectedProject.image }}>
                <h2>{selectedProject.name}</h2>
              </div>

              <div className="modal-body-lusion">
                <div className="modal-row">
                  <h4>Client</h4>
                  <p>{selectedProject.client}</p>
                </div>
                <div className="modal-row">
                  <h4>Strategy</h4>
                  <p>{selectedProject.strategy}</p>
                </div>
                <div className="modal-row">
                  <h4>Results</h4>
                  <p>{selectedProject.results}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurWork;