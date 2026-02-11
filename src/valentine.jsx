import React, { useState } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react'; // Tambah icon Gift
import './valentine.css'; 

export default function Valentine() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showYes, setShowYes] = useState(false);
  const [showSecret, setShowSecret] = useState(false); // State untuk gambar rahasia

  const handleNoHover = () => {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoClickCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setShowYes(true);
  };

  if (showYes) {
    return (
      <div className="valentine-container celebration">
        {/* MODAL GAMBAR RAHASIA */}
        {showSecret && (
          <div className="secret-overlay" onClick={() => setShowSecret(false)}>
            <div className="secret-content">
              <img src="https://i.pinimg.com/736x/83/c2/9d/83c29d80a8c6194809582f25a2cc2c9b.jpg" alt="Secret" />
              <p>Hehe, luv u 🌸</p>
            </div>
          </div>
        )}

        <div className="confetti-container">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? '#ff1493' : '#ff69b4',
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="hearts-container">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="floating-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                width: Math.random() * 20 + 10
              }}
              fill="currentColor"
            />
          ))}
        </div>

        <div className="content-box celebration-box">
          <img src="https://i.pinimg.com/1200x/88/cb/9d/88cb9de38b98974cb44392dda3c6fd7e.jpg" alt="Main" />
          <h1 className="celebration-text pulse">LAH MAU?! 💕</h1>
          <h3>Yaudadeh, Sabtu yeah</h3>
          <p>Btw, cek kiri bawah ya sayang</p>
        </div>

        {/* TOMBOL KECIL DI KIRI BAWAH */}
        <button className="secret-trigger" onClick={() => setShowSecret(true)}>
          <Gift size={20} />
        </button>
      </div>
    );
  }

  return (
    <div className="valentine-container">
      <div className="content-box">
        <h1>
          Hai MBG, Will you be my
          <span className="valentine-text"> Valentine?</span>
        </h1>

        <div className="button-container">
          <button className="yes-button" onClick={handleYesClick}>
            Baik, paduka raja
          </button>

          <button
            className="no-button"
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.2s ease'
            }}
          >
            {noClickCount > 5 ? "Gausah macem-macem" : "Woii!"}
          </button>
        </div>
      </div>
    </div>
  );
}