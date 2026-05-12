import React from 'react';
import { MAPS, WA } from '../../constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footGrid">
        <div>
          <img src="/assets/cuore-logo.svg" alt="Cuore Italiano" />
          <p>Gelato artesanal italiano para tu pausa, tu antojo y tus celebraciones.</p>
        </div>
        <div>
          <h4>Ordena</h4>
          <a href={WA}>Pedido directo WhatsApp</a>
          <a href="#pedido">Cómo pedir directo</a>
          <a href="#eventos">Cotizar evento</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href="mailto:cuoreitaliano.gelato@gmail.com">cuoreitaliano.gelato@gmail.com</a>
          <a
            href="https://www.instagram.com/cuoreitaliano.gelato/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" style={{ width: '20px' }}></i> @Cuoreitaliano.gelato
          </a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer">
            Av. 6 Ote. 6, Cholula
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <div className="shell">
          <p className="copyright">© {new Date().getFullYear()} Cuore Italiano. Todos los derechos reservados.</p>
          <div className="powered">
            <span>Powered by</span>
            <a href="https://mercsoft.mx" target="_blank" rel="noopener noreferrer">
              <img src="/assets/mercsoft-logo.svg" alt="Mercsoft" className="mercsoft-logo" />
            </a>
          </div>
        </div>
      </div>

      <a className="mobileWa" href={WA}>
        <i className="fa-brands fa-whatsapp"></i> Ordenar directo
      </a>
    </footer>
  );
}
