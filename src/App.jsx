import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Menu from './components/sections/Menu';
import Story from './components/sections/Story';
import Showcase from './components/sections/Showcase';
import DirectOrder from './components/sections/DirectOrder';
import Apps from './components/sections/Apps';
import Events from './components/sections/Events';
import Location from './components/sections/Location';
import Footer from './components/sections/Footer';
import './styles.css';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Story />
      <Showcase />
      <DirectOrder />
      <Apps />
      <Events />
      <Location />
      <Footer />
    </>
  );
}
