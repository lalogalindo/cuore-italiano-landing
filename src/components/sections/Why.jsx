import React from 'react';
import Reveal from '../ui/Reveal';

const items = [
  ['100% natural', 'Sin saborizantes ni colorantes artificiales.'],
  ['Hecho desde cero', 'Recetas propias, ingredientes frescos y procesos cuidados.'],
  ['Más intenso', 'Menos grasa, menos azúcar y mucho más sabor que un helado común.']
];

export default function Why() {
  return (
    <section className="section bg-tint">
      <div className="shell">
        <Reveal>
          <span className="kicker">No es helado, es gelato</span>
          <h2>El respiro dulce que convierte cualquier día en recuerdo.</h2>
        </Reveal>
        <div className="cards">
          {items.map(([t, d], i) => (
            <Reveal className="card" key={t}>
              <span className="num">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
