import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { LinkedinIcon } from './Icons.jsx';
import '../styles/components.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="orb contact__glow"></div>
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="section-label">Let's Talk</div>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
            Ready to collaborate? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="contact__layout">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <div className="contact__info-list">
              {[
                { icon: <Mail size={19} color="var(--primary)" />, key: 'Email', val: 'charanpalimara@gmail.com', href: 'mailto:charanpalimara@gmail.com' },
                { icon: <Phone size={19} color="var(--cyan)" />, key: 'Phone', val: '+91-7386569469', href: 'tel:+917386569469' },
                { icon: <MapPin size={19} color="var(--pink)" />, key: 'Location', val: 'Visakhapatnam, Andhra Pradesh' },
              ].map(item => (
                <div key={item.key} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-key">{item.key}</div>
                    {item.href ? (
                      <a href={item.href} className="contact__info-val" style={{ textDecoration: 'none', color: 'var(--text)' }}>
                        {item.val}
                      </a>
                    ) : (
                      <div className="contact__info-val">{item.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="contact__social-title">Follow Me</div>
            <div className="contact__socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact__social"><LinkedinIcon size={17} /></a>
              <a href="mailto:charanpalimara@gmail.com" className="contact__social"><Mail size={17} /></a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
            style={{ transformOrigin: 'top center' }}
          >
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="contact__input" placeholder="John Doe" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="contact__input" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="contact__field">
              <label className="contact__label">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="contact__input" placeholder="Project Inquiry" />
            </div>
            <div className="contact__field">
              <label className="contact__label">Message</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} className="contact__textarea" placeholder="Tell me about your project..." required></textarea>
            </div>

            {status && (
              <div style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', fontSize: '0.95rem' }}>
                <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {/* {status === 'error' && (
            <div style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', fontSize: '0.95rem' }}>
              <AlertCircle size={18} /> Failed to send message. Please ensure the server is running.
            </div>
          )} */}

            <button type="submit" className="contact__submit" disabled={status === 'loading'} style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
              {status === 'loading' ? 'Sending...' : 'Send Message'} {status !== 'loading' && <Send size={16} />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
