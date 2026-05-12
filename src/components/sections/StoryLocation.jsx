import React from 'react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { MAPS } from '../../constants';

export default function StoryLocation() {
  return (
    <section id="ubicacion" className="section bg-tint">
      <div className="shell storyGrid">
        <Reveal className="story">
          <span className="kicker">Nuestra historia</span>
          <h2>Un sueño italiano que encontró casa en Puebla.</h2>
          <p>
            Nacimos de una pasión heredada y del deseo de llevar a México el
            verdadero gelato italiano. Desde 2016 elaboramos cada receta sin atajos,
            con ingredientes frescos, procesos artesanales y amor por los
            pequeños grandes placeres.
          </p>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9980375225286!2d-98.3052427!3d19.0638239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc77804c003e7%3A0x296dbb5ebc43ac90!2sCuore%20Italiano%2C%20Cholula!5e0!3m2!1ses!2smx!4v1778572217484!5m2!1ses!2smx" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Reveal>
        <Reveal className="location">
          <i className="fa-solid fa-map-pin" style={{ fontSize: '28px', color: 'var(--violet)', marginBottom: '16px' }}></i>
          <h3>Visítanos en Cholula</h3>
          <p>Av. 6 Ote. 6, Centro, Cholula, Puebla</p>
          <p>
            <i className="fa-regular fa-clock"></i> Pregunta horarios y sabores disponibles por WhatsApp.
          </p>
          <Button href={MAPS} secondary>
            Cómo llegar <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
