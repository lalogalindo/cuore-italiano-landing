import React from 'react';

export default function Img({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`img ${className}`}
      onError={(e) => e.currentTarget.classList.add('imgFallback')}
    />
  );
}
