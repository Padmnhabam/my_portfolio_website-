import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Brain, 
  MessageSquare, 
  Database, 
  ExternalLink, 
  Github 
} from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      icon: BarChart3,
      title: 'Sales Analytics Dashboard',
      description: 'Interactive Power BI dashboard analyzing sales performance across multiple regions. Implemented advanced DAX calculations and created dynamic visualizations for executive reporting.',
      technologies: ['Power BI', 'SQL', 'Excel', 'DAX'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      icon: Brain,
      title: 'Customer Churn Prediction',
      description: 'Machine learning model to predict customer churn using ensemble methods. Achieved 92% accuracy with feature engineering and hyperparameter tuning.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      icon: MessageSquare,
      title: 'Sentiment Analysis Tool',
      description: 'NLP-based sentiment analysis application using generative AI techniques. Processes social media data to extract insights about brand perception.',
      technologies: ['Python', 'NLP', 'Generative AI', 'TensorFlow'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      icon: Database,
      title: 'Data Pipeline Automation',
      description: 'Automated ETL pipeline for processing large datasets from multiple sources. Implemented data quality checks and real-time monitoring capabilities.',
      technologies: ['Python', 'SQL', 'Apache Airflow', 'Docker'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      links: {
        github: '#',
        demo: '#'
      }
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
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div 
                className="project-header"
                style={{ background: project.gradient }}
              >
                <div className="project-icon">
                  <project.icon size={32} />
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.links.github} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.links.demo} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;