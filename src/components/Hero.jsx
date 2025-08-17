import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Database, BarChart3, Brain, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Data Analyst',
    'Data Scientist',
    'ML Engineer',
    'Python Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { Icon: Database, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: BarChart3, delay: 0.5, position: { top: '60%', left: '15%' } },
    { Icon: Brain, delay: 1, position: { top: '30%', right: '10%' } },
    { Icon: Code, delay: 1.5, position: { top: '70%', right: '15%' } }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="highlight">Padmnabham Vijay Khedekar</span>
            </motion.h1>
            
            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Aspiring{' '}
              <span className="role-text">
                {roles[currentRole]}
              </span>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Computer Science Engineering graduate passionate about transforming data into actionable insights. 
              Proficient in Python, SQL, Machine Learning, and Data Visualization.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary">
                <Mail size={20} />
                Get In Touch
              </a>
              <a href="/resume.pdf" className="btn btn-secondary" download>
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="profile-card">
              <div className="profile-avatar">
                <span className="avatar-text">PVK</span>
              </div>
              
              <div className="floating-icons">
                {floatingIcons.map(({ Icon, delay, position }, index) => (
                  <motion.div
                    key={index}
                    className="floating-icon"
                    style={position}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: delay + 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2
                    }}
                  >
                    <Icon size={24} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;