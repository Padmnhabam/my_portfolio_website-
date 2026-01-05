import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Layers,
  Server,
  Database,
  Globe,
  Zap
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 }
      ]
    },
    {
      icon: Layers,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Tailwind CSS', level: 88 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      icon: Globe,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel/Netlify', level: 85 }
      ]
    },
    {
      icon: Zap,
      title: 'Other Skills',
      skills: [
        { name: 'Testing (Jest/Vitest)', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon size={24} />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;