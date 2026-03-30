import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/components.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, type: 'spring', bounce: 0.3 } }
};

const About = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top)  / height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.02)`;
    };
    const reset = () => { card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)'; };
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', reset);
    return () => { card.removeEventListener('mousemove', handleMouseMove); card.removeEventListener('mouseleave', reset); };
  }, []);

  return (
    <section id="about" className="about">
      <div className="orb about__glow-1"></div>
      <div className="orb about__glow-2"></div>
      <div className="container">
        <div className="about__layout">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={fadeUpVariant} className="about__label">About Me</motion.div>
            <motion.h2 variants={fadeUpVariant} className="about__title">
              Crafting Digital<br /><span className="gradient-text">Experiences</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="about__body">
              Highly motivated Full Stack Developer with a proven track record in designing, developing,
              and deploying robust web and mobile applications. I specialize in creating efficient support
              systems and enhancing user experiences through innovative solutions.
            </motion.p>
            <motion.p variants={fadeUpVariant} className="about__body">
              Adept at managing complex projects from inception to completion, delivering scalable
              and high-performance applications that drive real business results.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="about__info-grid">
              {[
                { k: 'Education',   v: 'Bachelor of Science' },
                { k: 'College',     v: 'Presidency Degree College' },
                { k: 'Location',    v: 'Visakhapatnam, AP' },
                { k: 'Status',      v: '🟢 Open to Work' },
              ].map(item => (
                <div key={item.k} className="about__info-item">
                  <div className="about__info-key">{item.k}</div>
                  <div className="about__info-val">{item.v}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="about__visual"
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.17, 0.55, 0.55, 1] }}
          >
            <div className="about__card-3d">
              <div className="about__ring"></div>
              <div className="about__ring-2"></div>
              <div className="about__card-3d-inner" ref={cardRef}>
                <div className="about__initials">CKP</div>
                <div className="about__role">Full Stack Developer</div>
              </div>
              <motion.div 
                className="about__badge-float"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
              >
                🚀 Available Now
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
