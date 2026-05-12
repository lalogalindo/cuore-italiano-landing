import React from 'react';
import Reveal from '../ui/Reveal';
import { IMG } from '../../constants';

export default function Story() {
  return (
    <section id="historia" className="section bg-main">
      <div className="shell split">
        <Reveal style={{ textAlign: 'left' }}>
          <span className="kicker">Nuestra Historia</span>
          <h2>Un sueño italiano que encontró casa en Puebla.</h2>
          <div style={{ margin: '40px 0' }}>
            <p className="lead" style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
              Todo comenzó con el recuerdo de aquellos cálidos veranos en Italia, 
              donde el gelato no es solo un postre, sino un ritual, un momento de pausa 
              y conexión.
            </p>
            <p className="lead" style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
              Nacimos de una pasión heredada y del deseo genuino de llevar a Cholula 
              ese verdadero sabor artesanal. Desde 2016, nuestras palas no han dejado de girar.
              Elaboramos cada receta sin atajos, evitando pastas prefabricadas y eligiendo 
              ingredientes frescos y naturales. 
            </p>
            <p className="lead" style={{ color: 'var(--text-muted)' }}>
              Porque creemos que en un mundo que va de prisa, detenerse a disfrutar de un 
              gelato hecho con el corazón, es un pequeño milagro cotidiano.
            </p>
          </div>
          <div className="handwriting" style={{ color: 'var(--violet)', fontSize: '32px', marginTop: '20px' }}>
            Fatto con amore, dal 2016.
          </div>
        </Reveal>

        <Reveal>
          <div className="heroCard" style={{ minHeight: '500px' }}>
            <img 
              className="img" 
              src={IMG.gelatoFront} 
              alt="Gelato Cuore Italiano" 
              style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '12px' }}
            />
            <div className="floatCard">
              <i className="fa-solid fa-heart"></i>
              <span>Artesanal & Natural</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
