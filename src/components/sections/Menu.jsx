import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { WA } from '../../constants';
import { menuData } from '../../constants/menu';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('gelato');

  const tabs = [
    { id: 'gelato', label: 'Gelato Artigianale', icon: 'fa-ice-cream' },
    { id: 'bebidas', label: 'Bebidas Clásicas', icon: 'fa-mug-hot' },
    { id: 'postres', label: 'Postres Italianos', icon: 'fa-cake-candles' }
  ];

  return (
    <section id="menu" className="section bg-tint">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="kicker">Il Nostro Menu</span>
          <h2>Tradición en cada bocado.</h2>
          <p className="lead">
            Disfruta de nuestros gelatos artesanales, acompáñalos con un auténtico café italiano
            y termina con nuestros postres hechos en casa.
          </p>
        </Reveal>

        <Reveal style={{ width: '100%', maxWidth: '800px' }}>
          {/* Tabs */}
          <div className="menu-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn ${activeTab === tab.id ? 'btn1' : 'btn2'}`}
                style={{ borderRadius: '30px', padding: '12px 24px' }}
              >
                <i className={`fa-solid ${tab.icon}`}></i> 
                <span className="hide-mobile-text">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ minHeight: '350px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}
              >
                {menuData[activeTab].map((item, index) => (
                  <div key={index} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h4 style={{ margin: 0, color: 'var(--violet)', fontSize: '18px' }}>{item.name}</h4>
                      <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{item.price}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button href={WA} secondary>
              <i className="fa-brands fa-whatsapp"></i> Preguntar disponibilidad de sabores hoy
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
