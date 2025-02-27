import React, { useState } from 'react';
import './Carrossel.css';

const Carrossel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carrossel">
      <button onClick={prevSlide}>◀</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={nextSlide}>▶</button>
    </div>
  );
};

export default Carrossel;
