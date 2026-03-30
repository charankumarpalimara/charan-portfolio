import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTypewriter, useCounter } from '../hooks.js';
import '../styles/Hero.css';

const techBubbles = [
  { label: 'React.js',    color: '#61dafb', delay: '0s',  dur: '6s'  },
  { label: 'Node.js',     color: '#3c873a', delay: '1s',  dur: '7s'  },
  { label: 'React Native',color: '#61dafb', delay: '2s',  dur: '5s'  },
  { label: 'Flutter',     color: '#42a5f5', delay: '0.5s',dur: '6.5s'},
  { label: 'PHP',         color: '#777bb3', delay: '1.5s',dur: '8s'  },
];

const roles = [
  'Full Stack Developer',
  'React.js Engineer',
  'Mobile App Builder',
  'Flutter Developer',
  'UI/UX Enthusiast',
  'PHP Backend Dev',
];

const StatCounter = ({ target, label }) => {
  const [visible, setVisible] = useState(false);
  const count = useCounter(target, 1800, visible);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="hero__stat">
      <div className="hero__stat-num">{count}+</div>
      <div className="hero__stat-label">{label}</div>
    </div>
  );
};

const Hero = () => {
  const typeText = useTypewriter(roles, 80, 2200);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { type: 'spring', damping: 20, stiffness: 80 } }
  };

  return (
    <section id="home" className="hero">
      <div className="orb hero__orb-a"></div>
      <div className="orb hero__orb-b"></div>
      <div className="hero__mesh"></div>

      <div className="container">
        <motion.div 
          className="hero__content"
          variants={containerVars}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVars} className="hero__pill">
            <div className="hero__pill-dot"></div>
            Open to Work — Available Now
          </motion.div>

          <motion.h1 variants={itemVars} className="hero__heading">Charan Kumar</motion.h1>
          <motion.div variants={itemVars} className="hero__heading-alt">Palivela</motion.div>

          <motion.div variants={itemVars} className="hero__typewriter-row">
            <span>I am a&nbsp;</span>
            <span className="hero__typewriter-text">{typeText}</span>
            <span className="hero__cursor"></span>
          </motion.div>

          <motion.p variants={itemVars} className="hero__description">
            Crafting high-performance web and mobile applications that delight users.
            I turn complex problems into elegant, scalable digital solutions.
          </motion.p>

          <motion.div variants={itemVars} className="hero__cta">
            <a href="#projects" className="btn-primary">
              <span>Explore Work</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-ghost">Let's Connect</a>
          </motion.div>

          <motion.div variants={itemVars} className="hero__stats">
            <StatCounter target={3} label="Years Exp." />
            <div className="hero__stat-divider"></div>
            <StatCounter target={10} label="Projects" />
            <div className="hero__stat-divider"></div>
            <StatCounter target={5} label="Clients" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="hero__right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: [0.17, 0.55, 0.55, 1] }}
      >
        {techBubbles.map((b) => (
          <div
            key={b.label}
            className="hero__tech-bubble"
            style={{ '--float-delay': b.delay, '--float-dur': b.dur }}
          >
            <div className="hero__tech-dot" style={{ background: b.color }}></div>
            {b.label}
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
