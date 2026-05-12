import React from 'react';
import Reveal from '../ui/Reveal';
import { IMG } from '../../constants';

export default function Story() {
  return (
    <section id="historia" className="section bg-main">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Reveal style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '60px' }}>
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

        <Reveal className="mosaic" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', width: '100%' }}>
          <img className="img" src={IMG.scoop} alt="Gelato artesanal" style={{ height: '300px' }} />
          <img className="img" src={IMG.cone} alt="Cono de gelato" style={{ height: '300px' }} />
          <img className="img" src={IMG.cup} alt="Taza de gelato" style={{ height: '300px' }} />
        </Reveal>
      </div>
    </section>
  );
}
