import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  BarChart3, 
  Brain, 
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
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'R', level: 70 }
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      skills: [
        { name: 'Power BI', level: 88 },
        { name: 'Tableau', level: 80 },
        { name: 'Excel', level: 85 },
        { name: 'Matplotlib/Seaborn', level: 82 }
      ]
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: [
        { name: 'Scikit-learn', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'NumPy', level: 88 },
        { name: 'Pandas', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Big Data',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Apache Spark', level: 70 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'REST APIs', level: 78 }
      ]
    },
    {
      icon: Zap,
      title: 'AI & Tools',
      skills: [
        { name: 'Generative AI', level: 75 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 }
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