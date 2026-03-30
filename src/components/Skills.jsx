import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/components.css';

const categories = [
  {
    icon: <Code size={24} color="var(--cyan)" />,
    title: 'Front-End / Mobile',
    gradient: 'linear-gradient(90deg, var(--primary), var(--cyan))',
    skills: ['React.js', 'React Native', 'Flutter', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    icon: <Server size={24} color="var(--primary)" />,
    title: 'Back-End',
    gradient: 'linear-gradient(90deg, var(--cyan), var(--pink))',
    skills: ['PHP', 'Node.js', 'Python', 'REST APIs', 'MySQL', 'MongoDB'],
  },
  {
    icon: <Wrench size={24} color="#f59e0b" />,
    title: 'Tools & Platforms',
    gradient: 'linear-gradient(90deg, var(--pink), var(--primary))',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Ubuntu', 'npm / yarn'],
  },
];

const Skills = () => (
  <section id="skills" className="skills">
    <div className="orb skills__bg-orb"></div>
    <div className="container">
      <motion.div 
        className="skills__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-label">Technology</div>
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
          A complete view of my tech stack — from pixel-perfect UIs to scalable back-ends.
        </p>
      </motion.div>

      <motion.div 
        className="skills__grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            className="skill-card"
            style={{ '--bar-color': cat.gradient }}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4 } }
            }}
          >
            <div className="skill-card__icon">{cat.icon}</div>
            <h3 className="skill-card__title">{cat.title}</h3>
            <div className="skill-card__tags">
              {cat.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
