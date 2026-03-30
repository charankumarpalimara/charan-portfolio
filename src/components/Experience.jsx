import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/components.css';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Billbo Technologies',
    location: 'Visakhapatnam',
    period: 'August 2024 – June 2025',
    points: [
      'Led full-lifecycle development of responsive web and mobile apps, enhancing user engagement and streamlining business operations.',
      'Spearheaded design of critical features for company websites, client-facing apps, and dynamic dashboards.',
      'Utilized React.js, React Native (front-end) and PHP (back-end) for optimal cross-platform performance.',
      'Collaborated with cross-functional teams to define requirements, troubleshoot, and deliver high-quality solutions.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Logojech Technologies',
    location: 'Visakhapatnam',
    period: 'February 2023 – June 2024',
    points: [
      'Built and maintained the Billbo website, dashboard, and mobile application from scratch.',
      'Implemented scalable solutions using React.js, React Native, and PHP, contributing to strategic objectives.',
      'Participated in code reviews, debugging, and performance optimization to maintain application stability.',
      'Gathered feedback from stakeholders and continuously iterated on features for user satisfaction.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <motion.div 
        className="experience__header"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-label">Career</div>
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
        <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
          My professional journey building products that matter.
        </p>
      </motion.div>

      <div className="experience__timeline">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i} 
            className="experience__item"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.2, type: 'spring', bounce: 0.3 }}
          >
            <div className="experience__dot"></div>
            <div className="exp-card">
              <div className="exp-card__top">
                <div>
                  <div className="exp-card__title">{exp.title}</div>
                  <div className="exp-card__meta">
                    <span className="exp-card__meta-item"><Briefcase size={13} />{exp.company}</span>
                    <span className="exp-card__meta-item"><MapPin size={13} />{exp.location}</span>
                  </div>
                </div>
                <div className="exp-card__period"><Calendar size={12} />{exp.period}</div>
              </div>
              <ul className="exp-card__points">
                {exp.points.map((pt, j) => (
                  <li key={j} className="exp-card__point">
                    <span className="exp-card__bullet"></span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
