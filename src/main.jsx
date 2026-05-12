import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const WHATSAPP_ORDER = 'https://wa.me/522211873410?text=Hola%20Cuore%20Italiano%2C%20quiero%20hacer%20un%20pedido%20directo';
const WHATSAPP_EVENTS = 'https://wa.me/522211873410?text=Hola%20Cuore%20Italiano%2C%20quiero%20cotizar%20gelato%20para%20un%20evento';
const MAPS = 'https://www.google.com.mx/maps/search/Av.+6+Ote.+6,+Centro,+Cholula,+Puebla';

const images = {
  hero: 'https://cuore-italiano.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-22-at-10.03.29-AM-1.jpeg',
  scoop: 'https://cuore-italiano.com/wp-content/uploads/2026/01/helado2.jpg',
  cone: 'https://cuore-italiano.com/wp-content/uploads/2026/01/CUORE-04.jpg',
  cup: 'https://cuore-italiano.com/wp-content/uploads/2026/01/CUORE-01.jpg',
  drink: 'https://cuore-italiano.com/wp-content/uploads/2026/01/CUORE-09.jpg',
  event: 'https://cuore-italiano.com/wp-content/uploads/2026/01/PHOTO-2026-01-12-12-46-34.jpeg',
};

const flavors = ['Pistache', 'Nogada', 'Nocciola', 'Tiramisú', 'Lavanda', 'Jamaica & albahaca', 'Frutti di Bosco', 'Chocolate sorbetto'];
const apps = [
  { name: 'Didi Food', url: 'https://www.didi-food.com/' },
  { name: 'Uber Eats', url: 'https://www.ubereats.com/' },
  { name: 'Rappi', url: 'https://www.rappi.com.mx/' },
];

function Icon({ name }) {
  const icons = {
    arrow: '→',
    calendar: '✦',
    heart: '♡',
    location: '⌖',
    message: '✆',
    sparkle: '✶',
    star: '★',
    truck: '↠',
    utensils: '◌',
  };

  return <span className="icon" aria-hidden="true">{icons[name]}</span>;
}

function Button({ href = WHATSAPP_ORDER, children, secondary = false, className = '' }) {
  const isExternal = href.startsWith('http');

  return (
    <a className={`button ${secondary ? 'buttonSecondary' : 'buttonPrimary'} ${className}`} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
      {children}
    </a>
  );
}

function ImageCard({ src, alt, className = '' }) {
  return <img className={`imageCard ${className}`} src={src} alt={alt} loading="lazy" onError={(event) => { event.currentTarget.src = '/assets/gelato-fallback.svg'; }} />;
}

function SectionIntro({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`sectionIntro reveal ${centered ? 'centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

function Header() {
  return (
    <header className="siteHeader">
      <a href="#top" className="brand" aria-label="Cuore Italiano inicio">
        <img src="/assets/cuore-logo.svg" alt="Cuore Italiano" />
      </a>
      <nav aria-label="Navegación principal">
        <a href="#gelato">Gelato</a>
        <a href="#pedido">Pedido directo</a>
        <a href="#eventos">Eventos</a>
        <a href="#ubicacion">Ubicación</a>
      </nav>
      <Button className="desktopOnly"><Icon name="message" /> Ordenar directo</Button>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="heroSection">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="container heroGrid">
        <div className="heroCopy reveal">
          <span className="eyebrow"><Icon name="sparkle" /> Gelato artesanal italiano en Cholula</span>
          <h1>Tu momento mágico, servido directo por Cuore.</h1>
          <p>Cremosidad perfecta, sabores intensos e ingredientes naturales. Pide directo por WhatsApp y recibe el gelato con el cuidado de casa.</p>
          <div className="ctaRow">
            <Button><Icon name="message" /> Ordenar directo por WhatsApp</Button>
            <Button href="#gelato" secondary>Explorar sabores <Icon name="arrow" /></Button>
          </div>
          <div className="proofBar" aria-label="Datos de Cuore Italiano">
            <span>Desde 2016</span>
            <span>+100 sabores creados</span>
            <span>Sin bases prehechas</span>
          </div>
        </div>
        <div className="heroVisual reveal">
          <ImageCard src={images.hero} alt="Gelato artesanal Cuore Italiano" />
          <div className="floatingNote"><Icon name="heart" /> Natural, artesanal y preparado con amore</div>
        </div>
      </div>
    </section>
  );
}

function WhyCuore() {
  const cards = [
    { title: '100% natural', text: 'Sin saborizantes ni colorantes artificiales.' },
    { title: 'Hecho desde cero', text: 'Recetas propias, ingredientes frescos y procesos cuidados.' },
    { title: 'Más intenso', text: 'Menos grasa, menos azúcar y mucho más sabor que un helado común.' },
  ];

  return (
    <section className="section creamSection">
      <div className="container">
        <SectionIntro eyebrow="No es helado, es gelato" title="El respiro dulce que convierte cualquier día en recuerdo." />
        <div className="featureGrid">
          {cards.map((card, index) => (
            <article className="featureCard reveal" key={card.title}>
              <span className="number">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="gelato" className="section darkSection">
      <div className="container splitGrid">
        <div className="reveal">
          <SectionIntro eyebrow="Producto estrella" title="Gelatos, sorbettos, bebidas y postres con carácter italiano." text="Clásicos, sabores top, opciones sin azúcar y temporadas especiales. Disfrútalos en tienda o llévalos en medios litros." />
          <div className="chips">
            {flavors.map((flavor) => <span key={flavor}>{flavor}</span>)}
          </div>
          <Button><Icon name="message" /> Preguntar sabores de hoy</Button>
        </div>
        <div className="imageMosaic reveal" aria-label="Productos Cuore Italiano">
          <ImageCard src={images.scoop} alt="Sabores de gelato" />
          <ImageCard src={images.cone} alt="Gelato Cuore" />
          <ImageCard src={images.drink} alt="Bebidas Cuore" />
          <ImageCard src={images.cup} alt="Postres y gelato" />
        </div>
      </div>
    </section>
  );
}

function DirectOrder() {
  return (
    <section id="pedido" className="section orderSection">
      <div className="container orderPanel">
        <div className="reveal">
          <span className="eyebrow light"><Icon name="truck" /> Pedido preferente</span>
          <h2>Ordena directo con Cuore Italiano.</h2>
          <p>La forma más cercana, rápida y cuidada: escríbenos por WhatsApp, confirma sabores disponibles y recibe atención directa del equipo.</p>
          <ul className="checkList">
            <li>Atención directa</li>
            <li>Medios litros preparados a temperatura ideal</li>
            <li>Gelato, bebidas y postres sujetos a disponibilidad</li>
          </ul>
        </div>
        <aside className="orderCard reveal">
          <div className="bigIcon"><Icon name="message" /></div>
          <h3>¿Antojo ahora?</h3>
          <p>Abre WhatsApp y pide tu momento mágico.</p>
          <Button><Icon name="message" /> Pedir por WhatsApp</Button>
        </aside>
      </div>
    </section>
  );
}

function AppsOrdering() {
  return (
    <section className="section appSection">
      <div className="container">
        <SectionIntro centered eyebrow="También disponible" title="Apps de delivery, como segunda opción." text="Si prefieres pedir desde tu app favorita, también puedes encontrarnos ahí." />
        <div className="appGrid">
          {apps.map((app) => (
            <a className="appCard reveal" href={app.url} target="_blank" rel="noreferrer" key={app.name}>
              <Icon name="utensils" />
              <strong>{app.name}</strong>
              <span>Ordenar en app</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="eventos" className="section eventSection">
      <div className="container splitGrid">
        <div className="eventImage reveal"><ImageCard src={images.event} alt="Gelato para eventos Cuore Italiano" /></div>
        <div className="reveal">
          <SectionIntro eyebrow="Vamos a tu evento" title="Haz que tu celebración sepa inolvidable." text="Tú eliges los sabores; Cuore lleva la magia. Cotizaciones para eventos de cualquier tamaño, con servicio a partir de 50 invitados." />
          <div className="miniChips">
            <span><Icon name="calendar" /> Bodas</span>
            <span><Icon name="star" /> Cumpleaños</span>
            <span><Icon name="sparkle" /> Empresas</span>
          </div>
          <Button href={WHATSAPP_EVENTS}><Icon name="message" /> Solicitar cotización</Button>
        </div>
      </div>
    </section>
  );
}

function StoryLocation() {
  return (
    <section id="ubicacion" className="section creamSection">
      <div className="container storyGrid">
        <div className="storyBlock reveal">
          <span className="eyebrow">Nuestra historia</span>
          <h2>Un sueño italiano que encontró casa en Puebla.</h2>
          <p>Nacimos de una pasión heredada y del deseo de llevar a México el verdadero gelato italiano. Desde 2016 elaboramos cada receta sin atajos, con ingredientes frescos, procesos artesanales y amor por los pequeños grandes placeres.</p>
        </div>
        <aside className="locationCard reveal">
          <Icon name="location" />
          <h3>Visítanos en Cholula</h3>
          <p>Av. 6 Ote. 6, Centro, Cholula, Puebla</p>
          <p>Pregunta horarios y sabores disponibles por WhatsApp.</p>
          <Button href={MAPS} secondary>Cómo llegar <Icon name="arrow" /></Button>
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <img src="/assets/cuore-logo.svg" alt="Cuore Italiano" />
          <p>Gelato artesanal italiano para tu pausa, tu antojo y tus celebraciones.</p>
        </div>
        <div>
          <h4>Ordena</h4>
          <a href={WHATSAPP_ORDER} target="_blank" rel="noreferrer">Pedido directo WhatsApp</a>
          <a href="#pedido">Cómo pedir directo</a>
          <a href="#eventos">Cotizar evento</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href="mailto:cuoreitaliano.gelato@gmail.com">cuoreitaliano.gelato@gmail.com</a>
          <a href="https://www.instagram.com/cuoreitaliano.gelato/" target="_blank" rel="noreferrer">@Cuoreitaliano.gelato</a>
          <a href={MAPS} target="_blank" rel="noreferrer">Av. 6 Ote. 6, Cholula</a>
        </div>
      </div>
      <a className="mobileWhatsApp" href={WHATSAPP_ORDER} target="_blank" rel="noreferrer"><Icon name="message" /> Ordenar directo</a>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyCuore />
      <Showcase />
      <DirectOrder />
      <AppsOrdering />
      <Events />
      <StoryLocation />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
