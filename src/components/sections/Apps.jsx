import React from 'react';
import Reveal from '../ui/Reveal';
import { apps } from '../../constants';

export default function Apps() {
  return (
    <section className="section apps">
      <div className="shell">
        <Reveal className="center">
          <span className="kicker">Encuéntranos en tu app</span>
          <h2>Llevamos el gelato hasta tu puerta.</h2>
          <p className="lead">
            Si lo prefieres, también estamos disponibles en las principales plataformas de delivery para tu mayor comodidad.
          </p>
        </Reveal>

        <div className="appGrid">
          {apps.map(({ name, url, logo }) => (
            <a
              className="appCard"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={name}
            >
              <img
                src={logo}
                alt={`Logo de ${name}`}
                style={{ height: '40px', objectFit: 'contain' }}
              />
              <b>{name}</b>
              <span>Ordenar en app</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}