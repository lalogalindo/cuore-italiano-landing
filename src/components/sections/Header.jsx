import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['menu', 'historia', 'gelato', 'pedido', 'eventos', 'ubicacion'];
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
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

  return (
    <header className="header">
      <a href="#top" className="brand">
        <img src="/assets/cuore-logo.svg" alt="Cuore Italiano" />
      </a>
      <nav>
        <a href="#menu" className={activeSection === 'menu' ? 'active' : ''}>Menú</a>
        <a href="#historia" className={activeSection === 'historia' ? 'active' : ''}>Historia</a>
        <a href="#gelato" className={activeSection === 'gelato' ? 'active' : ''}>Momentos</a>
        <a href="#pedido" className={activeSection === 'pedido' ? 'active' : ''}>Pedido directo</a>
        <a href="#eventos" className={activeSection === 'eventos' ? 'active' : ''}>Eventos</a>
        <a href="#ubicacion" className={activeSection === 'ubicacion' ? 'active' : ''}>Ubicación</a>
      </nav>
      <Button className="hide-sm">
        <i className="fa-brands fa-whatsapp"></i> Ordenar directo
      </Button>
    </header>
  );
}
