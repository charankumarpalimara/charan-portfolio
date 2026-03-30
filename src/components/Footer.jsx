import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon } from './Icons.jsx';
import '../styles/components.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div>
          <a href="#home" className="footer__logo">Charan.dev</a>
          <p className="footer__copy">© 2024 Charan Kumar Palivela. Built with ❤️ & React.</p>
        </div>
        <nav className="footer__links">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="footer__link">{l}</a>
          ))}
        </nav>
        <div className="footer__socials">
          {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__social"><LinkedinIcon size={16} /></a> */}
          <a href="mailto:charanpalimara@gmail.com" className="footer__social"><Mail size={16} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
