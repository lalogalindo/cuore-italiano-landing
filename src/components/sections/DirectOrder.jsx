import React from 'react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

export default function DirectOrder() {
  return (
    <section id="pedido" className="section order">
      <div className="shell orderBox">
        <Reveal>
          <span className="eyebrow">
            <i className="fa-solid fa-truck"></i> Pedido preferente
          </span>
          <h2>Ordena directo con Cuore Italiano.</h2>
          <p>
            La forma más cercana, rápida y cuidada: escríbenos por WhatsApp,
            confirma sabores disponibles y recibe atención directa del equipo.
          </p>
          <ul>
            <li>
              <i className="fa-solid fa-chevron-right"></i> Atención directa
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i> Medios litros preparados a temperatura ideal
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i> Gelato, bebidas y postres sujetos a disponibilidad
            </li>
          </ul>
        </Reveal>
        <Reveal className="orderCta">
          <div className="bigIcon">
            <i className="fa-brands fa-whatsapp" style={{ fontSize: '32px' }}></i>
          </div>
          <h3>¿Antojo ahora?</h3>
          <p>Abre WhatsApp y pide tu momento mágico.</p>
          <Button>
            <i className="fa-solid fa-phone"></i> Pedir por WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
