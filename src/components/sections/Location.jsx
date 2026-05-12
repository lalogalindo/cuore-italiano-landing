import React from 'react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { MAPS } from '../../constants';

export default function Location() {
  return (
    <section id="ubicacion" className="section bg-tint">
      <div className="shell">
        <Reveal style={{ textAlign: 'center', marginBottom: '40px' }}>
          <i className="fa-solid fa-map-pin" style={{ fontSize: '36px', color: 'var(--violet)', marginBottom: '16px' }}></i>
          <h2>Visítanos en Cholula</h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: '600px' }}>
            Av. 6 Ote. 6, Centro, Cholula, Puebla
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '12px' }}>
            <i className="fa-regular fa-clock"></i> Pregunta horarios y sabores disponibles por WhatsApp.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Button href={MAPS} secondary>
              Cómo llegar <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="map-container" style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(123, 36, 139, 0.1)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9980375225286!2d-98.3052427!3d19.0638239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc77804c003e7%3A0x296dbb5ebc43ac90!2sCuore%20Italiano%2C%20Cholula!5e0!3m2!1ses!2smx!4v1778572217484!5m2!1ses!2smx" 
              width="100%" 
              height="450" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
