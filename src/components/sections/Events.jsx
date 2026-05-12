import React from 'react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import Img from '../ui/Img';
import { IMG } from '../../constants';

export default function Events() {
  return (
    <section id="eventos" className="section event">
      <div className="shell split">
        <Reveal className="eventImg">
          <Img src={IMG.event} alt="Gelato para eventos Cuore Italiano" />
        </Reveal>
        <Reveal>
          <span className="kicker">Vamos a tu evento</span>
          <h2>Haz que tu celebración sepa inolvidable.</h2>
          <p className="lead">
            Tú eliges los sabores; Cuore lleva la magia. Cotizaciones para eventos
            de cualquier tamaño, con servicio a partir de 50 invitados.
          </p>
          <div className="mini">
            <span>
              <i className="fa-regular fa-calendar-heart"></i> Bodas
            </span>
            <span>
              <i className="fa-regular fa-star"></i> Cumpleaños
            </span>
            <span>
              <i className="fa-solid fa-wand-magic-sparkles"></i> Empresas
            </span>
          </div>
          <Button href="https://wa.me/522211873410?text=Hola%20Cuore%20Italiano%2C%20quiero%20cotizar%20gelato%20para%20un%20evento">
            <i className="fa-brands fa-whatsapp"></i> Solicitar cotización
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
