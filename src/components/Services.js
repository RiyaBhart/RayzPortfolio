import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // removed ArrowRight
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "We manage and scale your brand presence across platforms."
    },
    {
      title: "Influencer Marketing",
      description: "Connecting brands with creators for authentic engagement."
    },
    {
      title: "Website Development",
      description: "High-converting websites built for performance."
    },
    {
      title: "PR Management",
      description: "Strategic positioning and reputation growth."
    },
    {
      title: "Visual Production",
      description: "Professional photography and videography."
    }
  ];

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`custom-arrow prev ${className}`} style={{ ...style }} onClick={onClick}>
        <ChevronLeft size={24} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`custom-arrow next ${className}`} style={{ ...style }} onClick={onClick}>
        <ChevronRight size={24} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="carousel-wrapper">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="service-slide-padding">
                <div className="service-card">
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
