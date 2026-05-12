import React from 'react';
import { WA } from '../../constants';

export default function Button({ href = WA, children, secondary = false, className = '' }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`btn ${secondary ? 'btn2' : 'btn1'} ${className}`}
    >
      {children}
    </a>
  );
}
