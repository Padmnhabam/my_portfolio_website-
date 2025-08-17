import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Calendar, Target } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: Target,
      number: '10+',
      label: 'Projects Completed',
      description: 'Data analysis and ML projects'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Technologies Mastered',
      description: 'Programming languages & tools'
    },
    {
      icon: Calendar,
      number: '2026',
      label: 'Expected Graduation',
      description: 'Computer Science Engineering'
    },
    {
      icon: Users,
      number: '100%',
      label: 'Commitment',
      description: 'Dedicated to excellence'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants}>
              I'm a passionate Computer Science Engineering graduate (Class of 2026) with a strong foundation in 
              data analysis and machine learning. My journey in technology has led me to specialize in extracting 
              meaningful insights from complex datasets and building predictive models.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              With hands-on experience in Python, SQL, and various data visualization tools, I'm eager to contribute 
              to data-driven decision making in a dynamic organization. I believe in the power of data to solve 
              real-world problems and drive business growth.
            </motion.p>

            <motion.p variants={itemVariants}>
              My expertise spans across statistical analysis, machine learning algorithms, data visualization, 
              and web development. I'm particularly interested in applying AI and machine learning techniques 
              to solve complex business challenges and create innovative solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-description">{stat.description}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;