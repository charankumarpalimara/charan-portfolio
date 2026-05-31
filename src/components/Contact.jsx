import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Cal, { getCalApi } from '@calcom/embed-react';
import { LinkedinIcon } from './Icons.jsx';
import '../styles/components.css';

const CAL_LINK = import.meta.env.VITE_CAL_LINK || 'palimara-charan-ov04bs';

const CAL_UI = {
  theme: 'dark',
  hideEventTypeDetails: false,
  layout: 'column_view',
  disableAutoScroll: true,
  styles: {
    branding: { brandColor: '#6366f1' },
    body: { background: 'transparent' },
    eventTypeListItem: {
      backgroundColor: 'rgba(15, 28, 55, 0.9)',
      color: '#e2e8f0',
      border: '1px solid rgba(99,102,241,0.2)',
      borderRadius: '12px',
    },
  },
  cssVarsPerTheme: {
    dark: {
      'cal-brand': '#6366f1',
      'cal-brand-emphasis': '#818cf8',
      'cal-brand-text': '#ffffff',
      'cal-brand-subtle': '#06b6d4',
      'cal-text': '#94a3b8',
      'cal-text-emphasis': '#e2e8f0',
      'cal-text-subtle': '#64748b',
      'cal-bg': '#060d1a',
      'cal-bg-emphasis': '#0a1628',
      'cal-bg-subtle': '#02040a',
      'cal-border': 'rgba(99,102,241,0.15)',
      'cal-border-emphasis': 'rgba(99,102,241,0.45)',
      'cal-border-subtle': 'rgba(99,102,241,0.08)',
      'cal-border-booker': 'rgba(99,102,241,0.25)',
      'cal-border-booker-width': '1px',
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', CAL_UI);
    })();
  }, []);

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
        headers: { 'Content-Type': 'application/json' },
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
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="section-label">Let's Talk</div>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle contact__header-sub">
            Ready to collaborate? Send a message or book a call directly on my calendar.
          </p>
        </motion.div>

        <div className="contact__layout">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <div className="contact__info-list">
              {[
                { icon: <Mail size={19} color="var(--primary)" />, key: 'Email', val: 'charanpalimara@gmail.com', href: 'mailto:charanpalimara@gmail.com' },
                { icon: <Phone size={19} color="var(--cyan)" />, key: 'Phone', val: '+91-7386569469', href: 'tel:+917386569469' },
                { icon: <MapPin size={19} color="var(--pink)" />, key: 'Location', val: 'Hyderabad, Telangana' },
                { icon: <Calendar size={19} color="var(--green)" />, key: 'Book a Call', val: 'Schedule a meeting', href: '#schedule' },
              ].map(item => (
                <div key={item.key} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-key">{item.key}</div>
                    {item.href ? (
                      <a href={item.href} className="contact__info-val contact__info-link">{item.val}</a>
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
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
          >
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">Name</label>
                <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleInputChange} className="contact__input" placeholder="John Doe" required />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleInputChange} className="contact__input" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="contact__input" placeholder="Project Inquiry" />
            </div>
            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleInputChange} className="contact__textarea" placeholder="Tell me about your project..." required />
            </div>

            {status === 'success' && (
              <div className="contact__status contact__status--success">
                <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__status contact__status--error">
                Failed to send message. Please try again or email me directly.
              </div>
            )}

            <button type="submit" className="contact__submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              {status !== 'loading' && <Send size={16} />}
            </button>
          </motion.form>
        </div>

        <motion.div
          id="schedule"
          className="contact__calendar"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring', bounce: 0.3 }}
        >
          <div className="contact__calendar-glow" aria-hidden="true" />
          <div className="contact__calendar-header">
            <div className="section-label">Availability</div>
            <h3 className="contact__calendar-title">Schedule a <span className="gradient-text">Call</span></h3>
            <p className="contact__calendar-sub">Pick a time that works for you — free, no back-and-forth emails.</p>
            <div className="contact__calendar-badges">
              <span className="contact__calendar-badge">30 min meetings</span>
              <span className="contact__calendar-badge">Video or phone</span>
              <span className="contact__calendar-badge">Instant confirmation</span>
            </div>
          </div>
          <div className="contact__cal-frame">
            <div className="contact__cal-embed">
              <Cal
                calLink={CAL_LINK}
                className="contact__cal-widget"
                style={{ width: '100%' }}
                config={{ layout: 'column_view', theme: 'dark', 'ui.color-scheme': 'dark', 'ui.autoscroll': 'false' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
