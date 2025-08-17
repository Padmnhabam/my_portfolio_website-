import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  BookOpen,
  Code,
  Database,
  BarChart3
} from 'lucide-react';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'University Name',
    location: 'City, State',
    duration: '2022 - 2026',
    status: 'Expected Graduation: 2026',
    description: 'Comprehensive curriculum covering data structures, algorithms, database management, machine learning, and software engineering principles. Active participation in coding competitions and technical workshops.',
    achievements: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Machine Learning',
      'Software Engineering',
      'Web Development',
      'Statistics & Probability'
    ]
  };

  const certifications = [
    {
      icon: BarChart3,
      title: 'Data Analysis with Python',
      issuer: 'IBM/Coursera',
      date: '2024',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      icon: Database,
      title: 'SQL for Data Science',
      issuer: 'University of California',
      date: '2024',
      skills: ['SQL', 'Database Design', 'Query Optimization']
    },
    {
      icon: Code,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: '2023',
      skills: ['ML Algorithms', 'Scikit-learn', 'TensorFlow']
    },
    {
      icon: Award,
      title: 'Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2023',
      skills: ['Power BI', 'DAX', 'Data Modeling']
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
    <section id="education" className="education section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>

        <div ref={ref} className="education-content">
          {/* Main Education */}
          <motion.div
            className="education-main"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="education-card" variants={itemVariants}>
              <div className="education-header">
                <div className="education-icon">
                  <GraduationCap size={32} />
                </div>
                <div className="education-info">
                  <h3 className="education-degree">{education.degree}</h3>
                  <div className="education-details">
                    <span className="education-institution">
                      <BookOpen size={16} />
                      {education.institution}
                    </span>
                    <span className="education-location">
                      <MapPin size={16} />
                      {education.location}
                    </span>
                    <span className="education-duration">
                      <Calendar size={16} />
                      {education.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="education-body">
                <p className="education-status">{education.status}</p>
                <p className="education-description">{education.description}</p>

                <div className="education-achievements">
                  <h4>Key Subjects & Skills:</h4>
                  <div className="achievements-grid">
                    {education.achievements.map((achievement, index) => (
                      <span key={index} className="achievement-tag">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="certifications-section"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 className="certifications-title" variants={itemVariants}>
              Professional Certifications
            </motion.h3>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="cert-icon">
                    <cert.icon size={24} />
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                    <div className="cert-skills">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="cert-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;