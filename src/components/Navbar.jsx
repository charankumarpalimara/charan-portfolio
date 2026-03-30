import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { LinkedinIcon } from './Icons.jsx';
import '../styles/components.css';
import { useScrollReveal } from '../hooks.js';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar__inner">
            <a href="#home" className="navbar__logo">Charan.dev</a>
            <div className="navbar__links">
              {navLinks.map(l => (
                <a key={l.name} href={l.href} className="navbar__link">{l.name}</a>
              ))}
              <div className="navbar__socials">
                {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="navbar__social"><LinkedinIcon size={17} /></a> */}
                <a href="mailto:charanpalimara@gmail.com" className="navbar__social"><Mail size={17} /></a>
              </div>
            </div>
            <button className="navbar__menu-btn" onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`navbar__mobile ${open ? 'open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.name} href={l.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>{l.name}</a>
        ))}
        <div className="navbar__mobile-socials">
          {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer"><LinkedinIcon size={28} /></a> */}
          <a href="mailto:charanpalimara@gmail.com"><Mail size={28} /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
