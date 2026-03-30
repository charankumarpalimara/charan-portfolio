import React from 'react';
import { Monitor, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from './Icons.jsx';
import '../styles/components.css';

const projects = [
  { title: 'LiveWell Rehabilitation', desc: 'Dynamic e-commerce platform for a child rehabilitation organization, delivering specialized developmental resources and support services.', tags: ['React.js', 'Node.js', 'MongoDB'], link: 'https://www.livewellrehabilitationnetwork.com/' },
  { title: 'FARE Real Estate', desc: 'Elite educational platform offering specialized masterclasses in property sales, investment strategies, and RERA compliance.', tags: ['React.js', 'Framer Motion', 'Tailwind CSS'], link: 'https://fare-dark-theme.vercel.app/' },
  { title: 'Little Hearts', desc: 'A modern social application focused on fostering kindness, meaningful connections, and building a vibrant online community.', tags: ['React.js', 'Node.js', 'Tailwind CSS'], link: 'https://littlehearts.live/' },
  { title: 'CHALOO Sports', desc: 'India\'s Premier Sports Platform connecting players, professional coaches, and academies for elite training opportunities.', tags: ['React.js', 'PHP', 'MySQL'], link: 'https://umayur.com/' },
  { title: 'VRJ Info', desc: 'Professional tech solutions and consulting platform, emphasizing responsive design and streamlined digital workflows.', tags: ['React.js', 'Node.js', 'Tailwind CSS'], link: 'https://vrjinfo.com/' },
  { title: 'ValueAim AI', desc: 'AI-powered sales intelligence platform for B2B account managers to identify strategic priorities, buying signals, and close deals faster.', tags: ['React.js', 'Node.js', 'AI Integration'], link: 'https://valueaim.com/' },
  { title: 'Insaat Infra', desc: 'Professional corporate platform for a construction and infrastructure development company, delivering a powerful digital presence.', tags: ['React.js', 'Tailwind CSS', 'Node.js'], link: 'https://insaatinfra.in/' },
  { title: 'Billbo Dashboards', desc: 'Comprehensive dashboard for managing TV advertisement data in supermarkets with real-time visualization and analytics.', tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'] },
  { title: 'VPA Attendance App', desc: 'Mobile application for Visakhapatnam Port Authority to digitize and streamline employee attendance management.', tags: ['React Native', 'PHP', 'MySQL', 'jQuery'], link: 'https://play.google.com/store/apps/details?id=com.siddharth1711.vpaattendance&hl=en_IN' },
  { title: 'Technoisolutions.com', desc: 'High-performance website for a tech solutions provider focused on UI/UX, scalability, and lead generation.', tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'] },
  { title: 'Elephants Monitor App', desc: 'Real-time GPS tracking and data management for elephant conservation in Parthipuram forest, AP.', tags: ['React Native', 'PHP', 'MySQL'] },
  { title: 'SVLT.in Website', desc: 'Professional business portfolio for a construction company to showcase services and attract clients online.', tags: ['PHP', 'MySQL', 'React Native'], link: 'https://svlt.in/' },
  { title: 'Alantur Dashboards', desc: 'Full-featured operational dashboards for Alantur, enhancing team efficiency and data-driven decision making.', tags: ['React.js', 'Node.js', 'Ubuntu'] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4 } }
};

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <motion.div
        className="projects__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
          Real-world products I've built — from dashboards to mobile apps.
        </p>
      </motion.div>

      <motion.div
        className="projects__grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((p, i) => (
          <motion.div key={i} className="proj-card" variants={cardVariants}>
            <div className="proj-card__num">0{i + 1}</div>
            <div className="proj-card__icon">
              <Monitor size={22} color="var(--primary)" />
            </div>
            <h3 className="proj-card__title">{p.title}</h3>
            <p className="proj-card__desc">{p.desc}</p>
            <div className="proj-card__tags">
              {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
            </div>
            <div className="proj-card__footer">
              <span className="proj-link">Code &nbsp;<GithubIcon size={13} /></span>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="proj-link-main">Live Demo &nbsp;<ExternalLink size={13} /></a>
              ) : (
                <span className="proj-link-main">Live Demo &nbsp;<ExternalLink size={13} /></span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
