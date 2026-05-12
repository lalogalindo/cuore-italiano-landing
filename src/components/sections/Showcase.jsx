import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { WA } from '../../constants';
import { saboresTemporada } from '../../constants/saboresTemporada';

const phrases = [
  "Delizioso!", "Amore a primera vista", "Un dolce momento", 
  "Fatto con amore", "La dolce vita", "Sabor de hogar", 
  "Pausa perfetta", "Magia", "Gelato time",
  "Cholula mágica", "Puro amore", "Che buono!", "Sempre gelato",
  "Il dolce far niente", "Artigianale"
];

const MagneticPhoto = ({ photo, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring physics for smooth return and magnetic feel
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Repel from mouse
    x.set(-distanceX * 0.3);
    y.set(-distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="polaroid"
      drag
      dragConstraints={{ top: -50, left: -50, right: 900, bottom: 900 }}
      dragElastic={0.2}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.2, zIndex: 50 }}
      whileDrag={{ scale: 1.3, zIndex: 60, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
      onClick={onClick}
      style={{
        width: 160, 
        left: photo.initialPos.left,
        top: photo.initialPos.top,
        rotate: photo.initialPos.rotate,
        x: springX,
        y: springY
      }}
    >
      <img src={photo.src} alt="Cuore Gelato" />
      <div className="handwriting" style={{ textAlign: 'center', marginTop: '12px', lineHeight: '1' }}>
        {photo.phrase}
      </div>
    </motion.div>
  );
};

export default function Showcase() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Array de 40 números al azar del 1 al 1000
    const randomIds = Array.from({ length: 40 }, () => Math.floor(Math.random() * 1000) + 1);

    const newPhotos = randomIds.map((id, i) => {
      const left = Math.floor(Math.random() * 85);
      const top = Math.floor(Math.random() * 80);
      const rotate = Math.floor(Math.random() * 80) - 40;
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];

      return {
        id: `photo-${i}`,
        src: `https://picsum.photos/id/${id}/300/400`,
        phrase,
        initialPos: { left: `${left}%`, top: `${top}%`, rotate }
      };
    });
    
    setPhotos(newPhotos);
  }, []);

  return (
    <section id="gelato" className="section dark" style={{ paddingBottom: '200px', overflowX: 'hidden' }}>
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <Reveal>
          <span className="kicker">Producto estrella</span>
          <h2>Nuestros Momentos Cuore.</h2>
          <p className="lead" style={{ maxWidth: '800px' }}>
            Descubre los clásicos, sabores top, opciones sin azúcar y temporadas especiales.
            Disfrútalos en tienda o llévalos en medios litros. ¡Pasa el cursor sobre la mesa interactiva!
          </p>
          <div className="chips">
            {saboresTemporada.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
          <Button href={WA}>
            <i className="fa-brands fa-whatsapp"></i> Preguntar sabores de hoy
          </Button>
        </Reveal>
      </div>

      <Reveal className="photo-table" style={{ width: '100vw', borderRadius: '0', marginTop: '80px' }}>
        {photos.map((photo) => (
          <MagneticPhoto 
            key={photo.id} 
            photo={photo} 
            onClick={() => setSelectedPhoto(photo.src)} 
          />
        ))}
      </Reveal>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{ perspective: 1500 }}
          >
            <motion.div
              className="lightbox-content"
              initial={{ rotateY: 180, scale: 0.5, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: -180, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <img src={selectedPhoto} alt="Gelato" style={{ backfaceVisibility: 'hidden', backgroundColor: 'white', padding: '16px 16px 60px 16px', borderRadius: '8px' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
