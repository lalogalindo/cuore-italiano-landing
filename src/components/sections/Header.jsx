import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['menu', 'historia', 'gelato', 'pedido', 'eventos', 'ubicacion'];
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <a href="#top" className="brand" onClick={closeMenu}>
        <img src="/assets/cuore-logo.svg" alt="Cuore Italiano" />
      </a>
      
      <nav className={isMenuOpen ? 'open' : ''}>
        <a href="#menu" className={activeSection === 'menu' ? 'active' : ''} onClick={closeMenu}>Menú</a>
        <a href="#historia" className={activeSection === 'historia' ? 'active' : ''} onClick={closeMenu}>Historia</a>
        <a href="#gelato" className={activeSection === 'gelato' ? 'active' : ''} onClick={closeMenu}>Momentos</a>
        <a href="#pedido" className={activeSection === 'pedido' ? 'active' : ''} onClick={closeMenu}>Pedido directo</a>
        <a href="#eventos" className={activeSection === 'eventos' ? 'active' : ''} onClick={closeMenu}>Eventos</a>
        <a href="#ubicacion" className={activeSection === 'ubicacion' ? 'active' : ''} onClick={closeMenu}>Ubicación</a>
        
        <Button className="show-sm" onClick={closeMenu}>
          <i className="fa-brands fa-whatsapp"></i> Ordenar directo
        </Button>
      </nav>

      <div className="headerActions">
        <Button className="hide-sm">
          <i className="fa-brands fa-whatsapp"></i> Ordenar directo
        </Button>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
