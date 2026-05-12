import React from 'react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { IMG } from '../../constants';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img src={IMG.hero} alt="Cuore Italiano Hero" className="heroBg" />
      <div className="heroOverlay" />
      <div className="shell">
        <Reveal className="heroContent">
          <span className="eyebrow">
            <i className="fa-solid fa-wand-magic-sparkles"></i> Gelato artesanal italiano en Cholula
          </span>
          <h1>Tu momento mágico, servido directo por Cuore.</h1>
          <p>
            Cremosidad perfecta, sabores intensos e ingredientes naturales. Pide
            directo por WhatsApp y recibe el gelato con el cuidado de casa.
          </p>
          <div className="ctaRow">
            <Button>
              <i className="fa-brands fa-whatsapp"></i> Ordenar directo por WhatsApp
            </Button>
            <Button secondary href="#gelato">
              Explorar sabores <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
          <div className="proof">
            <span>Desde 2016</span>
            <span>+100 sabores creados</span>
            <span>Sin bases prehechas</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
