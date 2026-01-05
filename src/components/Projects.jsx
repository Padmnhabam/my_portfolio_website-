import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShoppingCart,
  MessageCircle,
  Palette,
  Cloud,
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
      icon: ShoppingCart,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with product catalog, shopping cart, checkout flow, and admin dashboard. Integrated Stripe payments and implemented user authentication with JWT.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with real-time messaging, group chats, file sharing, and typing indicators. Built with WebSocket technology for instant communication.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      icon: Palette,
      title: 'Design Portfolio Website',
      description: 'Responsive portfolio website with smooth animations, lazy loading, and optimized performance. Features dynamic content management and contact form with email notifications.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      icon: Cloud,
      title: 'Cloud Storage Service',
      description: 'File storage and sharing platform with drag-and-drop upload, folder organization, and secure file sharing. Implemented user authentication and AWS S3 integration.',
      technologies: ['React', 'Node.js', 'AWS S3', 'MongoDB'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
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